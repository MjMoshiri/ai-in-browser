# AI at the TAB

Don't switch to ChatGPT (or alternative AI tabs) to do tasks related to other tabs, such as fixing grammar. With this Chrome extension, you can use AI and perform the necessary tasks in your current tab with a single click.

## How to Run

To run the current version of the extension, you need a [Hugging Face Pro](https://huggingface.co/pricing) account and an [API key](https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token). If you don't have one, you can use the free version of the API, but you need to change the  `baseURL` and `model` in the [`background.js`](src/background.js) file to a free model that [supports chat](https://huggingface.co/blog/inference-pro#messages-api).

1. Clone the repo:

   ```bash
   git clone https://github.com/MjMoshiri/ai-in-browser
   ```

2. install the dependencies:

   ```bash
   npm install
   ```

3. Compile the project:

   ```bash
   ./compile.sh
   ```

4. Load the extension in to Chrome using [this guide](https://support.google.com/chrome/a/answer/2714278?hl=en#:~:text=Go%20to%20chrome%3A%2F%2Fextensions,the%20app%20or%20extension%20folder.)

   There should be an item added to your context menu. For now, the model only has the "Correct Grammar" feature as it's my most common use case for the AI.

## Code Sturcture

All files are located within the `src` directory:

- `background.js`: Manages the context menu and communicates with the Hugging Face API.
- `content.js`: Handles communication with the current tab.
- `options.js` and `options.html`: Manage extension settings, accessible via the extension popup.
