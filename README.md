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
 
## Installation Instructions

1. Clone or download the repository:
   ```bash
   git clone https://github.com/neeraj26jan/AutoClickerExtension.git
2. Open Google Chrome and go to the Extensions page by navigating to the Extensions page (chrome://extensions/).
3. Enable **Developer Mode** by toggling the switch in the upper right corner of the Extensions page.
4. Click **Load unpacked** and select the folder containing this repository.
5. The extension will then be installed and ready for use.

## How to Use

1. Once installed, open any webpage in the browser.
2. The extension will automatically select a random link on the page and click it.
3. A custom cursor (`cursor.png`) will be displayed during the automatic click action to indicate that the extension is active.

## Program Structure

- **manifest.json**: Contains the Chrome extension's configuration, permissions, and details about content scripts.
- **content.js**: The main JavaScript file that controls the logic for selecting random links and simulating mouse clicks on web pages.
- **cursor.png**: The custom cursor image used while the extension is running, providing visual feedback during automatic tasks.

## Minimum Requirements

- **Google Chrome**: Version 88.0.0 or higher.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
