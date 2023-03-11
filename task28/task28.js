let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(' ')

function hourse(n, m) {
    let dp = []
    for (let i = 0; i < n + 1; i++) {
        dp.push(new Array(m + 1).fill(0));
    }

    dp[1][1] = 1
    
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j <= m; j++) {
            dp[i][j] = dp[i - 1][j - 2] + dp[i - 2][j - 1];
        }
    }
    return dp[n][m]
}

console.log(hourse(+fileContent[0], +fileContent[1]))