let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);


function sortLite(trainCnt, trains) {
    let queue = []
    let path2 = []
    path2.push(0)

    for (let i of trains) {

        queue.push(+i)
        
        while (queue.length > 0) {
            if ((+path2.at(-1) + 1)  === queue.at(-1)) {
                path2.push(queue.at(-1))
                queue.pop()
            } else {
                break
            }
        }
    }
    return path2.length === +trainCnt + 1 ? "YES" : "NO";
}

console.log(sortLite(fileContent[0], fileContent[1].split(' ')))