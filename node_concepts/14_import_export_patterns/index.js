/*--------via regular require method-------*/

// const add = require("./math");
// console.log(add(1, 2));

/*--------via accessign property from object-------*/

/*
const math = require("./math");
console.log(math.add(1, 2));
console.log(math.sub(2, 1));
*/

/*--------via destructuring-------*/
const math = require("./math");
const {add, sub} = math;
console.log(add(1, 2));
console.log(sub(2, 1));
