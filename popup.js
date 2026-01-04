// Default blocked sites (these come pre-installed)
const DEFAULT_SITES = [
    'youtube.com',
    'facebook.com',
    'twitter.com',
    'x.com',
    'instagram.com',
    'reddit.com',
    'tiktok.com',
    'netflix.com'
];

const siteInput = document.getElementById('siteInput');
const addSiteBtn = document.getElementById('addSiteBtn');
const sitesList = document.getElementById('sitesList');

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    loadAndRenderSites();
});

// Add site on button click
addSiteBtn.addEventListener('click', addSite);

// Add site on Enter key
siteInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addSite();
    }
});

async function loadAndRenderSites() {
    const data = await chrome.storage.local.get(['blockedSites']);

    // If no custom sites stored yet, initialize with defaults
    if (!data.blockedSites) {
        await chrome.storage.local.set({ blockedSites: DEFAULT_SITES });
        renderSites(DEFAULT_SITES, []);
    } else {
        // Figure out which are default and which are custom
        const customSites = data.blockedSites.filter(site => !DEFAULT_SITES.includes(site));
        const defaultSitesInList = data.blockedSites.filter(site => DEFAULT_SITES.includes(site));
        renderSites(defaultSitesInList, customSites);
    }
}

function renderSites(defaultSites, customSites) {
    if (defaultSites.length === 0 && customSites.length === 0) {
        sitesList.innerHTML = `
            <div class="empty-state">
                <div class="icon">🚫</div>
                <p>No sites blocked yet</p>
            </div>
        `;
        return;
    }

    let html = '';

    // Render custom sites first (can be removed)
    customSites.forEach(site => {
        html += createSiteItem(site, false);
    });

    // Render default sites (show as default, can be removed too)
    defaultSites.forEach(site => {
        html += createSiteItem(site, true);
    });

    sitesList.innerHTML = html;

    // Attach remove listeners
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => removeSite(btn.dataset.site));
    });
}

function createSiteItem(site, isDefault) {
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${site}&sz=32`;
    return `
        <div class="site-item">
            <span class="site-name">
                <img src="${faviconUrl}" class="site-icon" alt="">
                ${site}
                ${isDefault ? '<span class="default-tag">default</span>' : ''}
            </span>
            <button class="remove-btn" data-site="${site}" title="Remove">×</button>
        </div>
    `;
}

async function addSite() {
    let site = siteInput.value.trim().toLowerCase();

    if (!site) return;

    // Clean up the URL - extract just the domain
    site = site.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/.*$/, '');

    // Validate it looks like a domain
    if (!site.includes('.')) {
        siteInput.value = '';
        siteInput.placeholder = 'Enter a valid domain';
        setTimeout(() => {
            siteInput.placeholder = 'e.g. reddit.com';
        }, 2000);
        return;
    }

    const data = await chrome.storage.local.get(['blockedSites']);
    const sites = data.blockedSites || DEFAULT_SITES;

    // Check if already exists
    if (sites.includes(site)) {
        siteInput.value = '';
        siteInput.placeholder = 'Already blocked!';
        setTimeout(() => {
            siteInput.placeholder = 'e.g. reddit.com';
        }, 2000);
        return;
    }

    // Add the new site
    sites.push(site);
    await chrome.storage.local.set({ blockedSites: sites });

    siteInput.value = '';
    loadAndRenderSites();
}

async function removeSite(site) {
    const data = await chrome.storage.local.get(['blockedSites']);
    const sites = data.blockedSites || [];

    const updatedSites = sites.filter(s => s !== site);
    await chrome.storage.local.set({ blockedSites: updatedSites });

    loadAndRenderSites();
}
