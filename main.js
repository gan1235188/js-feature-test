const fs = require('fs')
const path = require('path')

const moduleExports = 'module.exports'
const outputFile = path.resolve(__dirname, 'dist/index.js')
const data = fs.readFileSync('./dist/index.js').toString()

let content = {
  [moduleExports]: data
}

content = JSON.stringify(content)
content = content.replace(/^{(.*)}$/, '$1')
content = content.replace('"module.exports":', 'module.exports=')

if(data) {
  console.log('write file')
  return fs.writeFileSync(outputFile, content)
}

throw new Error('failed: content is empty')