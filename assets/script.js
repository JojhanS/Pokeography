// Weather API
var locationString = "";
var weatherContainer = document.getElementById("weather");
document.getElementById('cityButton').addEventListener('click', function(event){
    event.preventDefault();
    locationString = document.getElementById('city').value;
    getWeather(locationString)
})

function getWeather(locationString) {
fetch("https://chriscastle.com/proxy/?:proxy:http://api.weatherstack.com/current?access_key=2efa48685540853e56dac3d000771904&query="+locationString+"&units=f")
.then(function (response) {
    console.log("hi");
    return response.json();
})
    .then(function(data) {
        var getWeatherCode = data.current.weather_code
        var getWeatherDesc = data.current.weather_descriptions
        var getWindSpeed = data.current.wind_speed
        var getTemp = data.current.temperature
        var isDay = data.current.is_day
        console.log(getWindSpeed)
        console.log(getTemp)
        console.log(isDay)
        console.log(getWeatherCode)
        console.log(getWeatherDesc)

        if (getWeatherCode > 310) {
            fetchPokemonsByType("ice")
        }
        else {
            fetchPokemonsByType("normal")
        }
         
})
}


// fetches pokemon
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

