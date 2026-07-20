const dictionary = {
    "Creature Details": "生物情報",
    "Weight:": "重量:",
    "Food Type:": "餌の種類:",
};

function translatePage() {
    document.querySelectorAll("*").forEach(element => {
        const text = element.textContent.trim();
        if (element.innerText && element.innerText.includes("Weight")) {
            console.log(element.outerHTML);
        }

        if (dictionary[text]) {
            element.textContent = dictionary[text];
        }
    });
}

// 初回実行
translatePage();

// ページの変更を監視して、自動で再翻訳
const observer = new MutationObserver(() => {
    translatePage();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
