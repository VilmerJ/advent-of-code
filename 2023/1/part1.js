const readInput = require('../helpers/readLines')
const input = readInput(__dirname + '/input.txt')

const solve = (lines) => {
  return lines.reduce((total, line) => {
    const digits = line.match(/\d/g)
    return total + Number(digits[0] + digits[digits.length - 1])
  }, 0)
}

console.log(solve(input))
