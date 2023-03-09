let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);

function goodStr(count, info) {
    let arr = []
    let good = 0;

    for (let i = 1; i < info.length; i++) {
        arr.push(+info[i])
    }

    let min = arr[0]

    for (let i = 1; i < arr.length; i++) {

        if (min > arr[i]) {
            min = arr[i]
        }

        good += min
        min = arr[i]
    }
    return good

}

console.log(goodStr(+fileContent[0], fileContent))




