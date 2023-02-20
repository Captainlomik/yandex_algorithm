let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);


function findMin(nums) {
    let arr = nums.split(' ')
    let stack = [[+arr[0], 0]]
    

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] >= stack.at(-1)[0]) {
            stack.push([+arr[i], +i])
        } else {
            while (stack.at(-1) !== undefined && arr[i] < stack.at(-1)[0]) {
                let v = stack.pop()
                arr[v[1]] = +i
            }
            stack.push([+arr[i], +i])
        }
    }
    for (let i of stack) {
        arr[i[1]] = -1
    }

    return(arr.join(' '))
}


console.log(findMin(fileContent[1]))


