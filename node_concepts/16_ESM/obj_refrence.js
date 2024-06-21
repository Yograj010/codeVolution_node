let obj1 = {
    name: "Bruce Wayne",
    age: 32
}
let obj2 = obj1;
// obj2.name = "Batman"    //refrence not broken while just updating the property of the obj1, so modifying the obj2 will affect obj1.

obj2={      //refrence is broken if we add an object literal to the obj2, so modifying the obj2 will no longer affect obj1.
    name: "Clark Kent"
}

console.log(obj1);
console.log(obj2);


