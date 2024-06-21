/*
const fs =  require('fs');

console.log("First");

fs.readFile("./file.txt", "utf-8", (err, data)=>{
    if(err){
        console.log("something went wrong while reading file content.")
    }else{
        console.log("File read complete.")
    }
})

console.log("Second");
*/

const crypto = require('node:crypto');

const start = Date.now();
/* 
//---sync version-----
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

// console.log("Hash: ", Date.now() - start);
*/
//crypto module provides cryptographic functionality, like fs module crypto module also uses some libuv's thread pool for some of it's processes.
// pbkdf2 stands for "Password Based Key Derived function 2" and is one of the pupular method to hash passwords beforing storing them

let MaxCall = 5;
for(let i =0; i < MaxCall; i++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", ()=>{
        console.log(`Hash ${i +1}`, Date.now() - start);
    });
}