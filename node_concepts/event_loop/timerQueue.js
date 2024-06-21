setTimeout(()=>{
    console.log("This is setTimeout 1")
    Promise.resolve().then(()=> console.log("This is Promise.resolve() inside setTimeout"))
}, 0);
setTimeout(()=>{
    console.log("This is setTimeout 2")
    process.nextTick(()=>  console.log("This is inner process.nextTick inside setTimeout"))
}, 0);
setTimeout(()=>{
    console.log("This is setTimeout 3")
}, 0);