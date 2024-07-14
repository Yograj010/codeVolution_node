const cluster = require("cluster");
const http = require('http');
const OS = require('os');

// console.log("os: ",OS)
console.log("Number of cores: ",OS.cpus().length);
if(cluster.isMaster){   // code validating that when using cluster module then node treats index.js file as cluster master so it sets the cluseter.isMaster to TRUE
    console.log("Master process is is running on PID: ",process.pid);
    cluster.fork();
    cluster.fork();
}else{
    console.log("Worker started with PID: ", process.pid);
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
}