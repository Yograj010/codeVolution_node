//# For single variable/function export
/*--------pattern_1--------*/
// const add = (a, b)=>{
//     return a+b;
// }

// export default add;
/*------------------------*/

//# For single variable/function export
/*--------pattern_2--------*/
// export default (a, b)=>{
//     return a+b;
// }
/*------------------------*/

//# For multiple variable/function export
/*--------pattern_1--------*/
// const add = (a, b)=>{
//     return a+b;
// }

// const sub = (a, b)=>{
//     return b-a;
// }
// export default {add, sub};
/*------------------------*/

/*--------pattern_2--------*/   //named export
export const add = (a, b)=>{
    return a+b;
}

export const sub = (a, b)=>{
    return b-a;
}
// export default {add, sub};
/*------------------------*/