let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);


function playGame(player1, player2) {
    let i = 0;

    for (; player1.length > 0 && player2.length > 0; i++) {
        if (+player1[0] === 9 && +player2[0] === 0) {
            player2.push(+player1.shift())
            player2.push(+player2.shift())
        }
        else if (+player1[0] === 0 && +player2[0] === 9) {
            player1.push(+player1.shift())
            player1.push(+player2.shift())
        }

        else if (+player1[0] < +player2[0]) {
            player2.push(+player1.shift())
            player2.push(+player2.shift())
        }
        else {
            player1.push(+player1.shift())
            player1.push(+player2.shift())

        }

        if (i === 1000000) {
            return 'botva'
        }
      
    }

    return player1.length === 0 ? `second ${i}` : `first ${i}`
}

console.log(playGame(fileContent[0].trim().split(' '), fileContent[1].trim().split(' ')))