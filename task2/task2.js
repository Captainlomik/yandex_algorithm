let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf-8').trim().toString().split(/\r?\n/);

function prettyString(k, str) {
    let maxLength = 0

    if (str.length === 0) return 0
    else if (str.length === 1) return 1

    for (let i = 97; i <= 122; i++) {
        let countSwap = +k
        let maxStr = 0
        let l = 0;
        let r = 0;

        while (r < str.length && l < str.length) {
            if (str.charCodeAt(r) == i) {
                maxStr++
                r++
            }
            else if (str.charCodeAt(r) !== i && countSwap != 0) {
                maxStr++
                r++
                countSwap--
            }
            else if (str.charCodeAt(r) !== i && countSwap == 0) {
                if (maxLength < maxStr) {
                    maxLength = maxStr
                }
                if (str.charCodeAt(l) == i) {
                    l++
                    maxStr--
                }
                else {
                    l++
                    maxStr--
                    countSwap++
                }
            }
        }

        if (maxLength < maxStr) {
            maxLength = maxStr
        }
    }
    return maxLength

}


console.log(prettyString(fileContent[0], fileContent[1].trim()))
