let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim()

function validInt(s) {
    if (s.length % 2 !== 0) return 'no';
  
    let arr = [];
  
    for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
        case "(":
          arr.push(')');
          break;
        case "[":
          arr.push(']')
          break;
        case "{":
          arr.push('}')
          break;
        default:
          if (arr.pop() !== s[i]) {
            return 'no';
          }
      }
    }
     return arr.length === 0 ? 'yes' : 'no'
  }
  
  console.log(validInt(fileContent));