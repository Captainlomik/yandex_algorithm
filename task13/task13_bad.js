let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim()

let priorityObj = {
    '+': 0,
    '-': 0,
    '*': 1,
    '/': 1,
    '^': 2
}

function postfixNotation(nums) {
    let answer = ''
    let stack = []
    let sum = ''

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]

            if (!isNaN(+num))
                answer += num
            else if (num === '(')
                stack.push(num)
            else if (num === ')') {
                let res = stack.pop()

                while (res && res != '(') {
                    answer += res
                    res = stack.pop()
                }
            }
            else if (Object.keys(priorityObj).indexOf(num) >= 0) {
                while (priorityObj[stack.slice(-1)[0]] >= priorityObj[num]) {
                    answer += stack.pop()
                }
                stack.push(num)
            }
    }


    while (sum = stack.pop()) {
        answer += sum
    }
    return answer
}

console.log(postfixNotation(fileContent.split(' ')))