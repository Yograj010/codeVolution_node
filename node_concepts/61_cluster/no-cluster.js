const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("Home-page");
    }else if(req.url === "/slow-page"){
        for(let i=0; i < 9000000000; i++){}
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("slow-page")
    }
})

server.listen(8000, ()=> console.log("Server is runnnin on port : 8000"));

/*
to start pm2 write command: pm2 start no-cluster.js -i 0    //where 0 tells pm2 to create optimum number of processes according to the su=sytem available cores, on providing he number it  creates that number of processes.
to stop pm2 write command: pm2 stop no-cluster.js
*/