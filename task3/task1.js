let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').toString().split(/\r?\n/);

function getStickers(n, stickers, people, minValues) {
    if (n === 0 || people === 0) {
        console.log(0);
    } else {
        stickers.sort((a, b) => a - b);
        let newArr = minValues.slice(0);
        minValues.sort((a, b) => a - b);

        let stickerFlag = 0;
        let counter = 0;
        let resultMap = new Map();

        for (let i in minValues) {
            let last;
            while (minValues[i] > stickers[stickerFlag]) {
                if (last !== stickers[stickerFlag]) {
                    counter += 1;
                }
                last = stickers[stickerFlag];
                stickerFlag += 1;
            }
            resultMap.set(minValues[i], counter);
        }
        let res = "";
        for (let i of newArr) {
            res += resultMap.get(i) + "\n";
        }
        console.log(res.trim());
    }
}

getStickers(+fileContent[0],
    fileContent[1].trim().split(' '),
    +fileContent[2],
    fileContent[3].split(' ').map(el => +el))
