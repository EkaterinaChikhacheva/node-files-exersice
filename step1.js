const fs = require('fs')
const process = require('process')

/** read file at path and print it out. */

function cat(path){
    fs.readFile(path, 'utf8', function(err,data) {
        if (err) {
            console.log(`Error reading ${path} : ${err}`)
            process.exit(1)
        } else {
        console.log("We're good")
        console.log(`file contents are: ${data}`)
        }
    })
}
// process.argv is an array of command-line arguments given to start this program
cat(process.argv[2])