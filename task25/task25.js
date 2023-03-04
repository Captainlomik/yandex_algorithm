let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);

let dp = []
let a = []

function minRope(count, coordinate) {
    a[0] = 0
    for (let i = 1; i <= count; i++) {
        a[i] = +coordinate[i - 1]
    }
    a.sort((a, b) => +a - +b);

    dp[2] = a[2] - a[1]
    dp[3] = a[3] - a[1]

    for (let i = 4; i <= count; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + a[i] - a[i - 1]
    }
    return dp[count]

}
console.log(minRope(+fileContent[0], fileContent[1].split(' ')))