const fs = require("fs");
const path = require("path");

module.exports= (pathToDir, extension, callback) =>{
    fs.readdir(pathToDir, (err, list) => {
        if (err) return callback(err);        
        var filteredFiles = list.filter(f => path.extname(f) === `.${extension}`);
        callback(null, filteredFiles);
    });
} 
