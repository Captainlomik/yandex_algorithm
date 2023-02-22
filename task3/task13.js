let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').toString().split(/\r?\n/);

function getStickers(n, stickers, people, minValues) {
    if (n === 0 || people === 0) {
        console.log(0);
        return
    }
    stickers.sort((a, b) => a - b);
    cleanStickers = [+stickers[0]]
    for (let i = 1; i < stickers.length; i++) {
        if (+stickers[i] != +stickers[i - 1]) {
            cleanStickers.push(+stickers[i])
        }
    }

    let res = []
    for (let v of minValues) {
        if (v <= cleanStickers[0]) {
            res.push(0)
            continue
        }
        let l = 0
        let r = cleanStickers.length - 1
        let mid = 0
        let last = 0
        while (l <= r) {
            mid = Math.trunc((l + r) / 2)
            if (cleanStickers[mid] > v) {
                r = mid - 1
            } else if (cleanStickers[mid] < v) {
                if (cleanStickers[mid] > cleanStickers[last]) {
                    last = mid
                }
                l = mid + 1
            } else {
                r = mid -1
            }
        }
        res.push(last+1)
    }
    console.log(res.join('\n'))
}

getStickers(+fileContent[0],
    fileContent[1].trim().split(' '),
    +fileContent[2],
    fileContent[3].split(' ').map(el => +el))