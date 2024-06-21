const fs  = require("fs");

const fileContent = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContent);

fs.readFile("./file.txt", "utf-8",(error, data)=>{
    if(error){
        console.log("error: ",error);
    }else{
        console.log("data: ",data);
    }
})

fs.writeFileSync("./greet1.txt", "Hello Yograj");

fs.writeFile("./greet2.txt", "Hello Yogi", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File written successfully");
    }
});