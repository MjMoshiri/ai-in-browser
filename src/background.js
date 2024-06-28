import OpenAI from "openai";

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "grammarCorrect",
        title: "Correct Grammar",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "grammarCorrect") {
        chrome.storage.local.get('apiKey', data => {
            if (!data.apiKey) {
                chrome.tabs.sendMessage(tab.id, { action: "requireApiKey" }).catch(error => {
                    // TODO : Handle error
                });
            } else {
                correctGrammar(info.selectionText, tab.id, data.apiKey).catch(error => {
                    // TODO : Handle error
                });
            }
        });
    }
});
const Model = 'meta-llama/Meta-Llama-3-70B-Instruct';
async function correctGrammar(text, tabId, apiKey) {
    const client = new OpenAI({
        baseURL: "https://api-inference.huggingface.co/models/" + Model + "/v1/",
        apiKey
    });

    const messages = [
        {
            role: "system",
            content: "You are a highly skilled grammar correction assistant. Your task is to correct any grammatical errors, enhance sentence structure, and ensure the text is clear and concise. Return only the corrected text. reply with the corrected text without any additional information or qutations."
        },
        {
            role: "user",
            content: text
        }
    ];

    const response = await client.chat.completions.create({
        model: Model,
        messages,
        max_tokens: text.length * 2
    });

    const correctedText = response.choices[0].message.content;
    chrome.tabs.sendMessage(tabId, { action: "replaceText", correctedText }).catch(error => {
        // TODO : Handle error
    });
}