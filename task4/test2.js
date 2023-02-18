let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').toString().split(/\r?\n/);

function controlWork(sc, vc, pRow, pSide) {
    let pPos = pRow * 2 - pSide % 2;
    let vPosL = pPos - vc;
    let vPosR = pPos + vc;
    let vRowL = Math.trunc(vPosL / 2 + vPosL % 2);
    let vRowR = Math.trunc(vPosR / 2 + vPosR % 2);
    if (vPosL < 1 && vPosR > sc) {
        return -1
    }

    let psl = 1;
    if (vPosL % 2 == 0) {
        psl = 2
    }

    let psr = 1
    if (vPosR % 2 == 0) {
        psr = 2
    }

    if (pRow - vRowL >= vRowR - pRow && vPosR <= sc) {
        return [vRowR, psr]
    } else {
        return [vRowL, psl]
    }
}

let answ = controlWork(+fileContent[0], +fileContent[1], +fileContent[2], +fileContent[3])
Array.isArray(answ) ? console.log(...answ) : console.log(answ)
