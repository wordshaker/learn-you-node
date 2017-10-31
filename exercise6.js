const fileFilter = require('./exercise6_module.js');

var pathToDir = process.argv[2];
var extension = process.argv[3];

fileFilter(pathToDir, extension, (err, list) =>{
    if (err) throw err;
    var listOfFiles = list.reduce((stringSoFar, currentFile) => `${stringSoFar}${currentFile}\n`,'');
    console.log(listOfFiles);
});