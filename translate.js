const dictionary = {
    "Creature Details": "生物情報",
    "Creature:": "生物",
    "Weight:": "重量:",
    "Food Type:": "餌の種類:",
    "Hatch Multiplier:": "孵化倍率:",
    "Mature Multiplier:": "成長速度倍率:",
    "Consume Multiplier:": "餌の消費倍率:",
    "Gen2 Bulbdog Fetch:": "ジェネ2 バルブドッグフェッチ:",
    "Gen2 Slide and Glide:": "ジェネ2 スライド&グライド:",
    "Maturation": "成熟:",
    "Incubation:": "孵化にかかる時間:",
    "Maturation:": "現在の成長度:",
    "Elapsed Time:": "経過時間:",
    "Time to Juvenile:": "少年期までの時間:",
    "Time to Adult:": "成体までの時間:",
    "Food to Juvenile (E):": "少年期までに食べる餌の量:",
    "Food to Adult (E):": "成体までに食べる餌の量:",
    "Food Rate (E):": "食費率:",
    "Food per period (E):": "期間当たりの食料:",
    "Baby Phase": "幼年期",
    "Current Buffer:": "最大まで餌を入れてどれくらい生きるか:",
    "Food to Fill:": "持てる餌の量",
    "Hand Feed For:": "手動餌やりが必要な時間:",
    "Food to Finish:": ""
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
