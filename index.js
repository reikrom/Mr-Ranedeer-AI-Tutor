const fs = require('fs')
const path = require('path')
const json = require(path.join(__dirname, `./src/json.json`))

fs.writeFileSync('./minified/json.json', JSON.stringify(json))
