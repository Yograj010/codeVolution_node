//hashbang or shebang or sha-bang(#!)
// #!/usr/bin/env node
const yargs = require('yargs');
const { argv } = yargs(process.argv)

console.log("codeEvolution_yogi");

const printFiveMoves = async(pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const pokemon = await response.json();  //converts the response to JSON
    const moves = pokemon.moves.map(({move}) => move.name);
    console.log(moves.slice(0, 5));
}

printFiveMoves(argv.pokemon);