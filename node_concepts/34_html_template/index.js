const http  = require('node:http');
const fs = require('node:fs');

const SERVER = http.createServer((req, res)=>{
    const NAME = "Yograj";
    res.writeHead(200, {"content-Type":"text/html"});
    // fs.createReadStream(__dirname+'/index.html', "utf-8").pipe(res);
    let html = fs.readFileSync(__dirname+"/index.html", "utf-8");
    html = html.replace("{{userName}}", NAME);
    res.end(html);
})

const PORT = 3000;

SERVER.listen(PORT, ()=>{
    console.log("Server is runnign on http://localhost:"+PORT);
})