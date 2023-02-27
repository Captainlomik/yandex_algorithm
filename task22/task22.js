let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().split(' ');

function grasshopper(maxCount, jump) {
    let dp = []
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    let i

    for (i = 3; i <= jump; i++) {
        dp[i] = 2 * dp[i - 1]
    }

    while (i <= maxCount) {
        dp[i] = 2 * dp[i - 1] - dp[i - jump - 1]
        i++
    }
    return dp[maxCount]
}


console.log(grasshopper(+fileContent[0], +fileContent[1]))