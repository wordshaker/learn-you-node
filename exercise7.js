var http = require('http');

http.get(process.argv[2], (res) =>{
    res.setEncoding('utf8');
    res.on("data", function(data){
        console.log(data);
    });
    res.on("error", function(error){
        throw error;
    });
});