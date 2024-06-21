//NOTE: In this code we will learn how to send onject as resposne
const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-Type": "application/json"});
    res.end(JSON.stringify({"name": "Yograj"}));
})
const PORT = 3000;
server.listen(PORT,()=>{
    console.log("Server is running on: http://localhost:"+PORT);
});