// Weather API
var locationString = "New_York";
// var currentWeather = [
//     currentTime = ""
//     temperature = ""
//     weatherCode = ""
//     windSpeed = ""
// ]

fetch("https://chriscastle.com/proxy/?:proxy:http://api.weatherstack.com/current?access_key=2efa48685540853e56dac3d000771904&query=" + locationString + "&units=f")
.then(function (response) {
    console.log("hi");
    return response.json();
})
    .then(function(data) {
        console.log(data)
        // var currentWeather = data.current
})

function locationInput() {
   var locationString = document.getElementById('city').addEventListener('click', function(e){

   });
}

// // fetch("http://api.weatherstack.com/current?access_key=4f8d7a4bb61c72c9b79facd1733456d1&query="+location+"&units=f")
// fetch("http://api.weatherstack.com/current?access_key=2efa48685540853e56dac3d000771904&query="+location+"&units=f")
// .then(function (response) {
//     console.log("hi");
//     return response.json();
// })
//     .then(function(data) {
//         console.log(data)
//         // var currentWeather = data.current
// })

// function locationInput() {
//    var locationString = document.getElementById('city').addEventListener('click', function(e){

//    });
// }
// function displayWeather() {
//     currentWeather = ""
// }

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

// document.getElementById('cityButton').addEventListener('click', function() {
//   var pokemonType = document.getElementById('city').value;
//   fetchPokemonsByType(pokemonType);
// });


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
