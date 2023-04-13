// Gets all water type pokemon
fetch('https://pokeapi.co/api/v2/type/water', {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var waterTypePokemons = data.pokemon.map(pokemon => pokemon.pokemon.name);
    console.log(waterTypePokemons);
  });

// Gets all fire type pokemon
  fetch('https://pokeapi.co/api/v2/type/fire', {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var fireTypePokemons = data.pokemon.map(pokemon => pokemon.pokemon.name);
    console.log(fireTypePokemons);
  });

//Gets all grass type pokemon
fetch('https://pokeapi.co/api/v2/type/grass', {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var grassTypePokemons = data.pokemon.map(pokemon => pokemon.pokemon.name);
    console.log(grassTypePokemons);
  });
