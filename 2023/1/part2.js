const readInput = require('../helpers/readLines')
const input = readInput(__dirname + '/input.txt')

const numberStrings = ['one','two','three','four','five','six','seven','eight','nine']

const getDigits = (line) => {
  const digits = []
  for(let i = 0; i < line.length; i++){
    if (!isNaN(Number(line[i]))) {
      digits.push(line[i])
      continue
    }
    for (let j = 1; j <= numberStrings.length; j++) {
      if (line.substring(i, i + numberStrings[j-1].length) === numberStrings[j-1]) digits.push(String(j))
    }
  }
  return digits
}

const solve = (lines) => {
  return lines.reduce((total, line) => {
    const digits = getDigits(line)
    console.log(digits);
    return total + Number(digits[0] + digits[digits.length - 1])
  }, 0)
}

console.log(solve(input))
