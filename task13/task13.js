let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim()


function postfixNotation(nums) {
    let answ
    let stack = []

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]

        if (!isNaN(+num))
            stack.push(+num)
        else {
            let one = stack.pop()
            let two = stack.pop()
            switch (num) {
                case "+":
                    answ = two + one
                    stack.push(answ);
                    break;
                case "*":
                    answ = two * one
                    stack.push(answ);
                    break;
                case "/":
                    answ = two / one
                    stack.push(answ);
                    break;
                case "-":
                    answ = two - one
                    stack.push(answ);
                    break;
            }
        }
    }
    return stack.pop()
}

console.log(postfixNotation(fileContent.split(' ')))