const http  = require('http');

const SERVER = http.createServer((req, res)=>{
    // res.end(req.url);
    if(req.url === '/'){
        res.writeHead(200, {"content-Type": "text/plain"});
        res.end("Home Page");
    }else if(req.url === '/about'){
        res.writeHead(200, {"content-Type": "text/plain"});
        res.end("About page");
    }else if(req.url === '/api'){
        res.writeHead(200, {"content-Type": "application/json"});
        res.end(JSON.stringify({
            firstName :"Bruce",
            lastName: "Wayne"
        }))
    }else{
        res.writeHead(404);
        res.end("Page not found")
    }
});

const PORT = 3000;
SERVER.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:`+PORT);
})