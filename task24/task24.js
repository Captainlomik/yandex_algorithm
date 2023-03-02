let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);

function buyTickets(count, timeArray) {
    let a = []
    let b = []
    let c = []
    let t = []

    for (let i = 1; i < count + 1; i++) {
        let newArr = timeArray[i].split(' ')
        a[i] = +newArr[0]
        b[i] = +newArr[1]
        c[i] = +newArr[2]
    }

    t[0] = 0;
    t[1] = a[1];

    if (count > 1) t[2] = Math.min(a[1] + a[2], b[1])

    for (let i = 3; i < count + 1; i++) {
        t[i] = Math.min(t[i - 1] + a[i], t[i - 2] + b[i - 1], t[i - 3] + c[i - 2])
    }
    return t.at(-1)
}


console.log(buyTickets(+fileContent[0], fileContent))