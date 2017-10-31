const fs = require('fs');
var file =  fs.readFile(process.argv[2], 'utf8', (err, file) =>
{
    if(err){ throw err}
    console.log((file.split('\n').length) - 1);
});