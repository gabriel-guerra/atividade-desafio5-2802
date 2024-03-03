import fs from "fs";

const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
const resultBody = await result.json();

var pokemons = [];

for (var ps of resultBody.results){
    
    var pokemonInfo = await fetch(ps.url);
    pokemonInfo = await pokemonInfo.json();

    let pokemon = {
        nome: pokemonInfo.name,
        tipo: pokemonInfo.types.map(type => type.type.name),
        peso: pokemonInfo.weight,
        altura: pokemonInfo.height,
        pokedex: pokemonInfo.game_indices.find(index => index.version.name === 'red')?.game_index || null,
        sprite: pokemonInfo.sprites.front_default
    }

    pokemons.push(pokemon);

}

fs.writeFile("pokemon.json", JSON.stringify(pokemons, null, 2), (error) => {
    console.log(error);
});