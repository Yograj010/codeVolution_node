/*-------exports pattern 1--------*/

/*
const add = (a, b)=>{
    return a+b;
}

module.exports = add;
*/

/*-------exports pattern 2--------*/

/*
module.exports = (a, b)=>{
    return a+b;
}
*/

/*-------exports pattern 3--------*/
/*
const add = (a, b)=>{
    return a+b;
}

const sub = (a, b) =>{
    return a-b;
}

module.exports = { add, sub };
*/

/*--------via directly assigning a property to exports-------*/
// module.exports.add = (a, b)=>{
//     return a+b;
// }

// module.exports.sub = (a, b) =>{
//     return a-b;
// }

/*-------via just exports--------*/
add = (a, b)=>{
    return a+b;
}

sub = (a, b)=>{
    return b-a;
}

exports = {
    add, subtract
};