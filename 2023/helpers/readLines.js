const fs = require('node:fs');

module.exports = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n')
    const cleanedLines = lines.reduce((cleanedArray, line) => {
      if(line) {
        return [...cleanedArray, line]
      } else {
        return cleanedArray
      }
    }, [])
    return cleanedLines
  } catch (err) {
    console.error(err);
  }
}
