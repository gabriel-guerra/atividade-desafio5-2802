
const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
const resultBody = await result.json();
console.log(resultBody);

var pokemons;

for (var ps of resultBody.results){
    
    var pokemonInfo = await fetch(ps.url);
    pokemonInfo = await pokemonInfo.json();

    let pokemon = {
        nome: pokemonInfo.name,
        //tipo: [pokemonInfo.type.name],
        peso: pokemonInfo.weight,
        altura: pokemonInfo.height,
        pokedex: pokemonInfo.id,
        //sprite: pokemonInfo.sprites.front_default
    }

    console.log(pokemon);

}