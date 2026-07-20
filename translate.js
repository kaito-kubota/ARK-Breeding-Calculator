const dictionary = {
    "Creature Details": "生物情報",
};

function translatePage() {
    document.querySelectorAll("*").forEach(element => {
        const text = element.textContent.trim();

        if (dictionary[text]) {
            element.textContent = dictionary[text];
        }
    });
}

// 0.5秒ごとに翻訳
setInterval(translatePage, 500);
