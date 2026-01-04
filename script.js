const app = document.getElementById('app');

// Templates
const promptTemplate = `
    <h1>What is your main focus?</h1>
    <input type="text" id="focusInput" placeholder="e.g. Masters Applications" autocomplete="off" autofocus>
`;

const reminderTemplate = (focus) => `
    <h2 class="pulse">Are you still working on</h2>
    <h1>${focus}?</h1>
    <div style="margin-top: 2rem;">
        <button id="stayFocusedBtn">YES, I AM</button>
        <br>
        <button class="secondary-btn" id="doneBtn">I'm done with this</button>
    </div>
`;

// Init
chrome.storage.local.get(['currentFocus'], (result) => {
    if (result.currentFocus) {
        renderReminder(result.currentFocus);
    } else {
        renderPrompt();
    }
});

function renderPrompt() {
    app.innerHTML = promptTemplate;
    const input = document.getElementById('focusInput');
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== '') {
            const focus = input.value.trim();
            chrome.storage.local.set({ currentFocus: focus }, () => {
                renderReminder(focus);
            });
        }
    });
}

function renderReminder(focus) {
    app.innerHTML = reminderTemplate(focus);
    
    document.getElementById('stayFocusedBtn').addEventListener('click', () => {
        // Just encouragement, maybe a small animation later
        window.close(); // Close the new tab to go back to work? Or just let them browse if they said yes?
        // Actually, if they say YES, it implies they are opening a new tab for legitimate work related to the focus.
        // So we should probably substitute the content with a Google search bar or just show a nice "Go for it" message.
        // For now, let's just show a simple "Go get it" and let them use the URL bar.
        app.innerHTML = `<h1>Go get it.</h1>`;
    });

    document.getElementById('doneBtn').addEventListener('click', () => {
        chrome.storage.local.remove('currentFocus', () => {
            renderPrompt();
        });
    });
}
