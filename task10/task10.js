let fs = require('fs')
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString()


function infoStr(str) {
    let strMap = new Map()

    for (let i = 0; i < str.length; i++) {
        if (!strMap.has(str[i])) {
            strMap.set(str[i], 0)
        }
    }

    for (let i = 0; i < str.length; i++) {
        let pos = i + 1
        strMap.set(str[i], strMap.get(str[i]) + pos)
        strMap.set(str[i], strMap.get(str[i]) + (str.length - pos) * pos)
    }

    let keyArr = [...strMap.keys()].sort()

    for (i in keyArr) {
        console.log(keyArr[i] + ': ' + strMap.get(keyArr[i]))
    }
}


infoStr(fileContent.split(''))
