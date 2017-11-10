var http = require('http');

http.get(process.argv[2], (res) =>{
    res.setEncoding('utf8');
    var content = "";
    res.on("data", (data) => {
        if (data) {
            content += data;
        } 
    });
    
    res.on("end", () => {
        console.log(content.length);
        console.log(content);
    });
});
