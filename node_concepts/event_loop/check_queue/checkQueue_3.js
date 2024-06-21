setImmediate(()=> console.log("This is setImmediate 1"));

setImmediate(()=> {
    console.log("This is setImmediate 2");
    process.nextTick(()=> console.log("This is inner process.nextTick"));
    Promise.resolve().then(()=> console.log("This is inner promise.resolve"));
})

setImmediate(()=> console.log("This is setImmediate 3"));