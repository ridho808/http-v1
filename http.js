const http = require('http');
var PORT = 9090
http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-Type' : 'text/html'
    });
    res.write('<h1 style="text-align:center; font-size:200px">GOODBYE WRLD!!</h1>');
    res.end();
}).listen(PORT,()=>{
    console.log(`CONNECTED`);
});