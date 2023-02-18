let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').toString().split(/\r?\n/);


function getTime(A, B, C) {
    let strA = A.split(':')
    let strB = B.split(':')
    let strC = C.split(':')

    let timeA = strA[0] * 3600 + strA[1] * 60 + +strA[2]
    let timeC = strC[0] * 3600 + strC[1] * 60 + +strC[2]
    let delay = Math.round((timeC - timeA)/ 2)

    let timeB = strB[0] * 3600 + strB[1] * 60 + +strB[2]

    let answ = timeB + delay
    let h = Math.trunc(answ / 3600)
    let min = Math.trunc((answ - h * 3600) / 60)
    let sec = (answ - h * 3600) - Math.trunc((answ - h * 3600) / 60) * 60

    if (h < 9)  h = '0' + h
    if (min < 9)  min = '0' + min
    if (sec < 9)  sec = '0' + sec

    return `${h}:${min}:${sec}`

}

console.log(getTime(fileContent[0], fileContent[1], fileContent[2]))


function info(answ){
    let h = Math.trunc(answ / 3600)
    let min = Math.trunc((answ - h * 3600) / 60)
    let sec = (answ - h * 3600) - Math.trunc((answ - h * 3600) / 60) * 60
    return `${h}:${min}:${sec}`
}
console.log(info(88229))