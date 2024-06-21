const http = require('node:http');
const fs = require('node:fs'); 

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-Type": "text/html"});
    /*-------Method 1-----*/
    // res.end("<h1>Hello World</h1>");

    /*-------Method 2-----*/
    // const HTML = fs.readFileSync("./index.html", "utf-8");
    // res.end(HTML);

    /*-------Method 3-----*/
    // fs.createReadStream("./index.html").pipe(res);
                //or
    fs.createReadStream(__dirname+"/index.html").pipe(res);
})

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log("Server is running on: http://localhost:"+PORT);        
})
