const fs = require('fs');

fs.readFile(__filename, ()=>{
    console.log("This is readfile 1");
    setImmediate(()=>{
        console.log("This is inner setImmediate 1");
    })
});

process.nextTick(()=> console.log("This is process.nextTick 1"))
Promise.resolve().then(()=> console.log("This is promise.resolve 1"));
setTimeout(()=> {console.log("This is setTimeout 1")}, 0);

for(let i=0; i < 200000000; i++){}