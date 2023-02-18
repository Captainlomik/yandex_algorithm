let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

function gistogramm(str) {
    let list = new Map();
    let newStr = "";
    for (let i in str) {
        if (str[i] === " " || str[i] === `\n`) {
            continue;
        }
        if (!list.has(str[i])) {
            list.set(str[i], 0);
        }
        list.set(str[i], list.get(str[i]) + 1);
    }
    let sortedList = new Map([...list.entries()].sort());
    let maxValue = Math.max(...list.values());

    for (; maxValue !== 0; maxValue--) {
        for (let j of sortedList) {
            if (j[1] >= maxValue) {
                newStr += "#";
            } else {
                newStr += " ";
            }
        }
        newStr += `\n`;
    }
    newStr += [...sortedList.keys()].join("");
    console.log(newStr);
}

gistogramm(fileContent)