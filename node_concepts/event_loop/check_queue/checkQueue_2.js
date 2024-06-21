const fs = require('fs');

fs.readFile(__filename, ()=>{
    console.log("This is readfile 1");
    setImmediate(()=>{
        console.log("This is inner setImmediate 1");
    })
    process.nextTick(()=> console.log("This is inner process.nextTick"));
    setTimeout(()=> {console.log("This is inner setTimeout")}, 0);
    Promise.resolve().then(()=> console.log("this is inner promise.resolve"));
});

process.nextTick(()=> console.log("This is process.nextTick 1"))
Promise.resolve().then(()=> console.log("This is promise.resolve 1"));
setTimeout(()=> {console.log("This is setTimeout 1")}, 0);

for(let i=0; i < 200000000; i++){}

/*
Inference: microtask queues are executed in between the  fs.readfile callbacks and check-queue callbacks
*/