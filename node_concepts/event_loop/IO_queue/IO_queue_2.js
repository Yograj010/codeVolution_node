const fs = require('fs');

fs.readFile(__filename, ()=> console.log("This is fs.readFile 1"));
setTimeout(()=>{
    console.log("This is setTimeout 1")
}, 0);
process.nextTick(()=> console.log("This is process.nextTick 1"));
Promise.resolve().then(()=> console.log("This is promise.resolve 1"));