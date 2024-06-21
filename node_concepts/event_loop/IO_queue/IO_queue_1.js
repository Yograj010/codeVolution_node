const fs = require('fs');

setTimeout(()=>{console.log("This is setTimeOut 1")}, 0);
fs.readFile(__filename,()=> console.log("This is fs.readFile 1"));