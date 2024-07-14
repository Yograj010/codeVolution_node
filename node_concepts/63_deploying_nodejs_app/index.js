const http = require("http");

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Home-page");
});

const PORT = process.env.POR || 3000;

server.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`));