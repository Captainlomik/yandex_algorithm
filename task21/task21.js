let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');
let dp = []

function f(n) {

    if (n === 1) return 2
    if (n === 2) return 4
    if (n === 3) return 7
    if (dp[n] !== undefined) return dp[n]

    return dp[n] = f(n - 1) + f(n - 2) + f(n - 3)

}


console.log(f(+fileContent))


