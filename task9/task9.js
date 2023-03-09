let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);

function summ(info) {
    let mainInfo = info[0].split(' ')
    let M = +mainInfo[0]

    let i = 1
    let matrix = []
    let command = []
    let sum = 0

    while (i < M + 1) { //Матрица 
        matrix.push(info[i].split(' '))
        i++
    }

    while (i < info.length) { //Команды
        command.push(info[i].split(' '))
        i++
    }

    let k = 0
    while (k < command.length) {
        sum = 0
        for (let x = command[k][0] - 1; x <= command[k][2] - 1; x++) { //Сумма в матрице
            for (let y = command[k][1] - 1; y <= command[k][3] - 1; y++) {
                sum += +matrix[x][y]
            }
        }
        k++
        console.log(sum)
    }

}


summ(fileContent)