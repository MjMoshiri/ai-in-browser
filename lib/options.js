document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('apiKeyForm');
    if (form) { 
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const apiKeyInput = document.getElementById('apiKey');
            if (apiKeyInput) { 
                const apiKey = apiKeyInput.value;
                chrome.storage.local.set({apiKey: apiKey}, function() {
                    console.log('API Key is saved');
                });
            }
        });
    }
});