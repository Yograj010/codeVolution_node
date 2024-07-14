const inquirer = require("inquirer");


const printFirstFiveMove = async(pokemonName)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = await response.json();
    const moves = pokemon.moves.map(({move})=>move.name);
    console.log(moves.slice(0, 5));
}
const prompt = inquirer.createPromptModule();
prompt([{
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name, to view its first five moves"
}]).then((answer)=>{
    const pokemon = answer.pokemon; //pokemon refers to name property of above object
    printFirstFiveMove(pokemon);
})
