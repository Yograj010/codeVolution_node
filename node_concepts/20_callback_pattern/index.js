function greet(name){
    console.log("Hello "+ name);
}

function higherOrderFunction(callback){
    const name = "Yograj";
    callback(name);
}

higherOrderFunction(greet)