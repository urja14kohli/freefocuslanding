// Default blocked sites (must match popup.js)
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

// IMMEDIATELY hide everything while we check focus status
// This runs synchronously at document_start, before ANY page content renders
document.documentElement.style.visibility = 'hidden';
document.documentElement.style.overflow = 'hidden';

// Get current hostname
const currentHost = window.location.hostname.replace(/^www\./, '').toLowerCase();

// Check if we should block this page
chrome.storage.local.get(['currentFocus', 'blockedSites'], (result) => {
    // Get blocked sites (use defaults if not set)
    const blockedSites = result.blockedSites || DEFAULT_SITES;

    // Check if current site matches any blocked site
    const isBlocked = blockedSites.some(site => {
        const cleanSite = site.replace(/^www\./, '').toLowerCase();
        return currentHost === cleanSite || currentHost.endsWith('.' + cleanSite);
    });

    if (result.currentFocus && isBlocked) {
        // User has a focus set AND this is a blocked site - BLOCK THIS PAGE
        hijackPage(result.currentFocus);
    } else {
        // No focus set OR not a blocked site - let them browse freely
        document.documentElement.style.visibility = 'visible';
        document.documentElement.style.overflow = '';
    }
});

function hijackPage(focusString) {
    // Create the overlay with INLINE styles
    const overlay = document.createElement('div');
    overlay.id = 'focus-aura-overlay';

    overlay.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;800&display=swap');
            
            html, body {
                margin: 0 !important;
                padding: 0 !important;
                overflow: hidden !important;
            }
            
            #focus-aura-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: linear-gradient(45deg, #0f0c29, #302b63, #24243e);
                background-size: 400% 400%;
                animation: aura-bg 15s ease infinite;
                z-index: 2147483647;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-family: 'Inter', sans-serif;
                color: white;
                visibility: visible !important;
            }
            
            @keyframes aura-bg {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            #focus-aura-overlay h1 {
                font-size: 5rem;
                font-weight: 800;
                margin: 0;
                line-height: 1.1;
                text-transform: uppercase;
                letter-spacing: -0.05em;
            }
            
            #focus-aura-overlay p {
                font-size: 1.5rem;
                font-weight: 200;
                margin-top: 2rem;
                opacity: 0.8;
            }
            
            #focus-aura-overlay .focus-highlight {
                color: #ff4b4b;
                font-weight: 400;
                border-bottom: 2px solid #ff4b4b;
            }
        </style>
        <h1>Get Back<br>To Work</h1>
        <p>You said you were working on <span class="focus-highlight">${focusString}</span>.</p>
    `;

    // Completely replace the page
    document.documentElement.innerHTML = '';
    document.documentElement.appendChild(overlay);

    // Stop any pending network requests
    window.stop();
}
