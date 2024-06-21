const CLUSTER = require("cluster");
const HTTP = require("http");
const CPU_CORES = require("os").cpus().length;

if(CLUSTER.isMaster){
    console.log("Master process " +process.pid+ " is running")
    //## creating 2 worker process using fork method of cluster by calling it twice
    // CLUSTER.fork();
    // CLUSTER.fork();

    //## creating the numbers of workers same as number of available cpu-cors
    console.log("Number of available cores are: ",CPU_CORES);
    for(let i=0; i<CPU_CORES; i++){
        CLUSTER.fork();
    }
}else{
    console.log("Worker process " +process.pid+ " started");
    HTTP.createServer((req, res)=>{
        if(req.url === "/"){
            res.writeHead(200,{"content-Type": "text/plain"});
            res.end("hello world cluster");
        }else if(req.url === "/slow-page"){
            for(let i = 0; i < 6000000000; i++){}  //simulating cpu intensive task
            res.writeHead(200, {"content-type": "text/plain"});
            res.end("slow-page");
        }
    }).listen(8000,()=> console.log("Server is running on port 8000"));
}