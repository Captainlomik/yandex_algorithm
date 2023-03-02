let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim()


let a = []
a[1] = 0;
function calk(num) {
    let count = 0
    let min
    for (let i = 2; i < num + 1; i++) {
        min = a[i - 1] + 1
        if (i % 2 === 0) {
            min = Math.min(min, a[i / 2] + 1)
            count++
        }

        if (i % 3 === 0) {
            min = Math.min(min, a[i / 3] + 1)
            count++
        }
        a[i] = min


    }
    console.log(a[num])
}

function second(num) {
    let ret = []
    let i = num
    while (i > 1) {
        if (a[i] == a[i - 1] + 1) {
            ret.push(i)
            i--;
            continue;
        }

        if (i % 2 == 0 && a[i] == a[i / 2] + 1) {
            ret.push(i)
            i /= 2;
            continue;
        }

        ret.push(i)
        i /= 3;

    }
    ret.push(1)
    console.log(ret.reverse().join(' '))
}

calk(+fileContent)
second(+fileContent)
