let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);

function minRect(info) {

    let coords = []

    for (let i of info) {
        let num = i.trim().split(' ')
        coords.push([+num[0], +num[1]])
    }

    let x1 = coords[0][0]
    let y1 = coords[0][1]
    let x2 = coords[0][0]
    let y2 = coords[0][1]

    for (let i of coords) {
        if (x1 > i[0])
            x1 = i[0]

        if (y1 > i[1])
            y1 = i[1]

        if (x2 < i[0])
            x2 = i[0]

        if (y2 < i[1])
            y2 = i[1]
    }

    process.stdout.write(`${x1} ${y1} ${x2} ${y2}`)
}

minRect(fileContent.slice(1))