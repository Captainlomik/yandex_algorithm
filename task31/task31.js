let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);

let graph = new Map()

let used = []
let comp = []

let arr = []
for (let i = 0; i < fileContent.length; i++) {
    arr.push(fileContent[i].split(' '))
}
let vertexCount = +arr[0][0]
let ribsCount = +arr[0][1]



function createGraph() {

    for (let i = 1; i < arr.length; i++) {
        if (!graph.has(+arr[i][0])) {
            graph.set(+arr[i][0], [+arr[i][1]])
        }
        else {
            let newArr = graph.get(+arr[i][0])
            newArr.push(+arr[i][1])
            graph.set(+arr[i][0], newArr)
        }

        if (+arr[i][0] !== +arr[i][1]) {
            let newArr2
            graph.has(+arr[i][1]) ? newArr2 = graph.get(+arr[i][1]) : newArr2 = []
            newArr2.push(+arr[i][0])
            graph.set(+arr[i][1], newArr2)
        }
    }
    return graph
}


function find__coords() {
    if (ribsCount === 0 || !graph.has(1)) return 1 + '\n' + 1

    dfs(1)

    return +comp.length + '\n' + comp.sort((a, b) => a - b).join(' ')

}

function dfs(num) {
    used[num] = true
    comp.push(num)

    for (let j = 0; graph.get(num) !== undefined && j < graph.get(num).length; ++j) {
        let to = graph.get(num)[j]
        if (!used[to])
            dfs(to)
    }

}

createGraph(fileContent)
console.log(find__coords())
