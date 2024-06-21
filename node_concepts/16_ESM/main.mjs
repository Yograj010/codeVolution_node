//# for sinle variable/function export 
// import add from "./math-esm.mjs";

// console.log(add(5,5));

//# for multiple variable/function export
/*-------pattern_1-------*/ 
// import math from "./math-esm.mjs";

// console.log(math.add(5,5));
// console.log(math.sub(5,5));

/*-------pattern_2-------*/ 
// import * as math from "./math-esm.mjs"; //use this pattern n case of named default export
// const { add, sub } = math;  //name should match exported function name

// console.log(add(5,5));
// console.log(sub(5,5));

/*-------pattern_3-------*/ 
import { add, sub } from "./math-esm.mjs"; //another pattern in case of named default export. Here we are destructuring while importing the required functions

console.log(add(5,5));
console.log(sub(5,5));