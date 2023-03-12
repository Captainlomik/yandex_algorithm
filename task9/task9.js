let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);

function summ(info) {
    let mainInfo = info[0].split(' ')
    let M = +mainInfo[0]

    let i = 1
    let matrix = []
    let command = []
    let prev = []

    while (i < M + 1) { //Матрица 
        matrix.push(info[i].trim().split(' '))
        i++
    }

    while (i < info.length) { //Команды
        command.push(info[i].trim().split(' '))
        i++
    }

    for (let j = 0; j < M; j++) {
        prev.push(new Array(+mainInfo[1]).fill(0));
    }

    prev[0][0] = +matrix[0][0]

    for (let j = 1; j < M; j++) {
        prev[j][0] = prev[j - 1][0] + +matrix[j][0]
    }

    for (let j = 1; j < +mainInfo[1]; j++) {
        prev[0][j] = prev[0][j - 1] + +matrix[0][j]
    }


    for (let i = 1; i < M; i++) {
        for (let j = 1; j < +mainInfo[1]; j++) {
            prev[i][j] = prev[i - 1][j] + prev[i][j - 1] - prev[i - 1][j - 1] + +matrix[i][j]
        }
    }

    let arr = []
    for (let i of command) {
        let f = prev[i[2] - 1][i[3] - 1]

        let l = i[1] - 1 > 0 ? prev[i[2] - 1][i[1] - 2] : 0
        let t = i[0] - 1 > 0 ? prev[i[0] - 2][i[3] - 1] : 0
        let p = (i[0] - 1 > 0 && i[1] - 1 > 0) ? prev[i[0] - 2][i[1] - 2] : 0

        arr.push(f - l - t + p)
    }

    return arr.join('\n')
}


console.log(summ(fileContent))