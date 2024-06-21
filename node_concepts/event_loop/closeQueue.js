const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close",()=> console.log("This is close event 1"))

setImmediate(()=> console.log("This is setImmediate 1"));
setTimeout(()=>{console.log("This is setTimeOut 1")},0);
Promise.resolve().then(()=> console.log("This is prmoise.resolve 1"))
process.nextTick(()=> console.log("This is nextTick 1"));


/*
close queue claabacks are executed in the end after all the callbacks of all the other queues are execurted
*/