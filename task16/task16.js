let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);



function qequeFunction(command) {
    let arr = []
    let i = 0

    while (i <= command.length) {
        if ((command[i] === 'pop' || command[i] === 'front') && arr.length === 0) {
            console.log ('error')
            i++
            continue
        }

        if (command[i].includes('push')) {
            arr.push(command[i].split(' ')[1])
            console.log('ok')
        }

        switch (command[i]) {
            case 'pop':
                console.log(+arr.shift())
                break
            case 'front':
                console.log(+arr.at(0))
                break
            case 'size':
                console.log(+arr.length)
                break
            case 'clear':
                arr = []
                console.log('ok')
                break;
            case 'exit':
                console.log('bye')
                return;
        }

        i++
    }
}

qequeFunction(fileContent)
