const dictionary = {
    "Creature Details": "生物情報",
    "Weight:": "重量:",
    "Food Type:": "餌の種類:",
};

function translatePage() {
    document.querySelectorAll("*").forEach(element => {

        element.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent.trim();

                if (dictionary[text]) {
                    node.textContent = node.textContent.replace(text, dictionary[text]);
                }
            }
        });

    });
}

translatePage();

const observer = new MutationObserver(() => {
    translatePage();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
