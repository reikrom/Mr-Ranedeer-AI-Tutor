const fs = require('fs')
const path = require('path')
const json = require(path.join(__dirname, `./src/tutor.json`))

fs.writeFileSync('./minified/tutor.json', JSON.stringify(json))
