let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);

let arrMatrix = []
let dp = []

function way(n, m, arr) {
    for (let i = 1; i <= n; i++) {
        arrMatrix.push(arr[i].split(' '))
        dp.push(new Array(m).fill(0));
    }


    dp[0][0] = +arrMatrix[0][0]

    for (let i = 1; i < m; i++) {
        dp[0][i] = dp[0][i - 1] + +arrMatrix[0][i]
    }

    for (let i = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][0] + +arrMatrix[i][0]
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = Math.min(dp[i - 1][j] + +arrMatrix[i][j], dp[i][j - 1] + +arrMatrix[i][j])
        }
    }


    return dp[n-1][m-1]
}

console.log(way(+fileContent[0].split(' ')[0], +fileContent[0].split(' ')[1], fileContent))
