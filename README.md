# Auto Clicker Chrome Extension
The Auto Clicker Chrome extension is designed to move the mouse around and click on web pages. Once installed, the extension will randomly hover the mouse over a link on the active web page and click on it automatically. The extension works seamlessly with any web browser, providing gestures for web browser use.

## Special Features

- **Automated Mouse Movement & Clicking**: The extension identifies random links on the current webpage and simulates mouse clicks.
- **Random Link Selection**: Ensures that every click is performed on a randomly selected link, making it useful for browsing automation and testing.
- **Web Compatibility**: Works on all URLs accessed by the user in the browser.
- **Custom Cursor Support**: A custom cursor graphic (`cursor.png`) is used for visual feedback when the extension is active.
- **Minimal Permissions**: Clicking requires access to the active tab and browser tabs to function properly.

## Technical Information

- **Manifest Version**: 3
- **Chrome Compatibility**: Requires Chrome version 88.0.0 or higher.
- **Content Scripts**: Uses content scripts to inject JavaScript (`content.js`) into web pages to automate click actions.
- **Permissions**:
  - **activeTab**: Required to interact with the current web page.
  - **tabs**: Required to access the necessary tab information and perform actions within the browser.
 
## Installation

1. Clone or download the repository:
   ```bash
   git clone https://github.com/your-username/auto-clicker-extension.git
