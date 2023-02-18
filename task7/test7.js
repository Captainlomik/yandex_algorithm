let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').toString().split(/\r?\n/);

function getTime(A, B, C) {
    let strA = A.split(":");
    let strB = B.split(":");
    let strC = C.split(":");

    let timeA = strA[0] * 3600 + strA[1] * 60 + +strA[2];
    let timeC = strC[0] * 3600 + strC[1] * 60 + +strC[2];
    let delay = Math.abs(Math.round((timeC - timeA) / 2));
    if (timeC < timeA) {
        delay = Math.abs(Math.round((timeC + 24 * 3600 - timeA) / 2))
    }
    let timeB = strB[0] * 3600 + strB[1] * 60 + +strB[2];

    let answ = timeB + delay;
    let h = Math.trunc(answ / 3600);
    if (h >= 24) h -= 24;
    let min = Math.trunc(answ / 60) % 60;
    let sec = answ % 60;

    if (h <=  9) h = "0" + h;
    if (min <= 9) min = "0" + min;
    if (sec <= 9) sec = "0" + sec;

    return `${h}:${min}:${sec}`;
}

console.log(getTime(fileContent[0], fileContent[1], fileContent[2]))


