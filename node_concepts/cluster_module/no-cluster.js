const http = require("http");

let server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.writeHead(200, { "content-Type": "text/plain" });
        res.end("Hello world");
    }else if(req.url == "/slow-page"){
        for(let i = 0; i < 6000000000; i++){}  //simulating cpu intensive task
        res.writeHead(200, { "content-Type": "text/plain" });
        res.end("slow-page");
    }
})

server.listen(8000, ()=>console.log("Server is running on port 8000"));

//## command to run no-cluster as cluster using pm2 node-package
//command ot install pm2 globally on system:-- sudo npm i -g pm2
//command to start pm2 start no-cluster.js -i 0
//command to stop pm2 stop no-cluster.js