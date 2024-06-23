# AI at the TAB

## WIP

Don't switch to ChatGPT (or alternative AI tabs) to do tasks related to other tabs, such as fixing grammar. With this Chrome extension, you can use AI and perform the necessary tasks in your current tab with a single click.

## How to Run

In order to run the current version of the extension, you need a [Hugging Face Pro](https://huggingface.co/pricing) and a [API key](https://huggingface.co/docs/api-inference/en/quicktour#get-your-api-token).

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
