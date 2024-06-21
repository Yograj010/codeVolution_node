(function(message){
    const superHero = "Batman";
    console.log(message,superHero);
})("Men are brave, ");

(function(message){
    const superHero = "Superman";
    console.log(message, superHero);
})("Hello! ");

/*------IIFE parameters------*/
(function(exports, required, module, __filename, __dirname){
    const SuperHero = "Batman";
    console.log(SuperHero);
})()