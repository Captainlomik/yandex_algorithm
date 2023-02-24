let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);


function getOS(countDivides, sectors) {
    let newSectors = []

    for (let n of sectors) {
        newSectors.push(n.split(' '))
    }

    for (let i in newSectors) {
        for (let j = +i + 1; j < newSectors.length; j++) {
            if (+newSectors[i][0] <= +newSectors[j][1] && +newSectors[j][0] <= +newSectors[i][1]) {
                countDivides -= 1
                break
            }
        }

    }
    return countDivides
}

console.log(getOS(+fileContent[1], fileContent.slice(2)))

