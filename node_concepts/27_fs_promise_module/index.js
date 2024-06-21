const { error } = require("console");
const fs = require("fs/promises");

fs.readFile("file.txt", "utf-8")
.then(data => console.log(data))
.catch(error => console.log(error));

async function readFile(){
    try{
        let data = await fs.readFile("./file.txt", "utf-8");
        console.log(data);
    }catch(error){
        console.log("error: ",error);
    }
}

readFile();