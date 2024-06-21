
Promise.resolve().then(()=> console.log("This is Promise.resolve 1"));
Promise.resolve().then(()=> {
    console.log("This is Promise.resolve 2")
    Promise.resolve().then(()=> console.log("This is final process.nextTick inside Promise.resolve"))
});
Promise.resolve().then(()=> console.log("This is Promise.resolve 3"));

process.nextTick(()=> console.log("This is process.nextTick 1"));
process.nextTick(()=>{
    console.log("This is process.nextTick 2");
    process.nextTick(()=>{
        console.log("This is final process.nextTick inside process.nextTick");
    })
})
process.nextTick(()=> console.log("This is process.nextTick 3"));
