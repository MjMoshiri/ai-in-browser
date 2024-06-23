chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "replaceText") {
        replaceSelectedText(request.correctedText);
    }else if (request.action === "requireApiKey") {
        alert('Please set your API key in the extension options.');
    }
});

function replaceSelectedText(correctedText) {
    const activeElement = document.activeElement;
    const selection = window.getSelection();
    if (activeElement && isEditable(activeElement)) {
        replaceInEditableElement(activeElement, correctedText);
    } else if (selection && selection.rangeCount) {
        replaceInSelection(selection, correctedText);
    }
}

function isEditable(element) {
    return element.contentEditable === 'true' || element.tagName === 'TEXTAREA' || (element.tagName === 'INPUT' && element.type === 'text');
}

function replaceInEditableElement(element, correctedText) {
    const { selectionStart: startPos = 0, selectionEnd: endPos = 0 } = element;
    element.value = element.value.substring(0, startPos) + correctedText + element.value.substring(endPos);
    element.setSelectionRange(startPos, startPos + correctedText.length);
}

function replaceInSelection(selection, correctedText) {
    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(correctedText));
}