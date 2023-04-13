// Weather API
var location = ""
var currentWeather = ""

fetch('http://api.weatherstack.com/current') {
    ? accessKey = '4f8d7a4bb61c72c9b79facd1733456d1'
    & query = location
    & units = 'f'
    & language = 'en'
}

document.getElementById('cityButton').addEventListener('click', function() {
  var pokemonType = document.getElementById('city').value;
  fetchPokemonsByType(pokemonType);
});


function fetchPokemonsByType(type) {
  fetch(`https://pokeapi.co/api/v2/type/${type}`, {})
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var pokemons = data.pokemon.map(pokemon => pokemon.pokemon.name);
      console.log(pokemons);
    });
}

// // Gets all water type pokemon
// fetch('https://pokeapi.co/api/v2/type/water', {
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     var waterTypePokemons = data.pokemon.map(pokemon => pokemon.pokemon.name);
//     console.log(waterTypePokemons);
//   });

// // Gets all fire type pokemon
//   fetch('https://pokeapi.co/api/v2/type/fire', {
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     var fireTypePokemons = data.pokemon.map(pokemon => pokemon.pokemon.name);
//     console.log(fireTypePokemons);
//   });

// //Gets all grass type pokemon
// fetch('https://pokeapi.co/api/v2/type/grass', {
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     var grassTypePokemons = data.pokemon.map(pokemon => pokemon.pokemon.name);
//     console.log(grassTypePokemons);
//   });
