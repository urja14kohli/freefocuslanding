# Lockdin - Chrome Extension

**An aesthetic focus tool that nudges you on new tabs and blocks distractions.**

## Features

- **Focus Prompts** - Every new tab asks "What is your main focus?" to keep you on track
- **Site Blocking** - Automatically blocks distracting sites when you have a focus set
- **Custom Block List** - Add or remove sites from your personal block list
- **Beautiful Design** - Stunning purple gradient aesthetic
- **Privacy First** - All data stored locally, nothing leaves your device

## Installation

### From Chrome Web Store (Recommended)
Coming soon!

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the `focus-aura` folder

## Usage

1. **Set Your Focus**: Open a new tab and enter what you're working on
2. **Stay Focused**: When you try to visit a blocked site, you'll see a reminder
3. **Manage Sites**: Click the extension icon to add/remove blocked sites
4. **Complete Task**: Click "I'm done with this" when you finish your focus session

## Default Blocked Sites

- YouTube
- Facebook
- Twitter/X
- Instagram
- Reddit
- TikTok
- Netflix

You can add or remove any site through the popup settings!

## Files

| File | Description |
|------|-------------|
| `manifest.json` | Extension configuration |
| `newtab.html` | New tab override page |
| `script.js` | New tab page logic |
| `styles.css` | New tab page styling |
| `content.js` | Site blocking logic |
| `popup.html` | Settings popup |
| `popup.js` | Settings logic |
| `popup.css` | Settings styling |

## Privacy

Lockdin does not collect any data. Everything is stored locally using Chrome's storage API. See [PRIVACY_POLICY.md](PRIVACY_POLICY.md) for details.

## License

MIT License - Feel free to use and modify!

---

Made to help you focus
