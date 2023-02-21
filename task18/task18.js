let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);


function deqequeFunction(command) {
    let arr = []
    let i = 0

    while (i <= command.length) {
        if ((
            command[i] === 'back' || command[i] === 'front' ||
            command[i] === 'pop_back' || command[i] === 'pop_front')
            && arr.length === 0) {

            console.log('error')
            i++
            continue
        }

        if (command[i].includes('push_back')) {
            arr.push(command[i].split(' ')[1])
            console.log('ok')
        }

        if (command[i].includes('push_front')) {
            arr.unshift(command[i].split(' ')[1])
            console.log('ok')
        }


        switch (command[i]) {
            case 'pop_front':
                console.log(+arr.shift())
                break
            case 'pop_back':
                console.log(+arr.pop())
                break
            case 'front':
                console.log(+arr.at(0))
                break
            case 'back':
                console.log(+arr.at(-1))
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

deqequeFunction(fileContent)
