const fs = require("fs");
const path = require("path");

var pathToDir = process.argv[2];
var extension = `.${process.argv[3]}`;

fs.readdir(pathToDir, (err, list) => {
    if (err) throw err;
    
    var filteredFiles = list.filter(f => path.extname(f) === extension)
                            .reduce((stringSoFar, currentFile) => `${stringSoFar}${currentFile}\n`,'');
    console.log(filteredFiles);
});