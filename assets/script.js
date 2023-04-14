// Weather API
var locationString = "";
var weatherContainer = document.getElementById("weather");
document.getElementById('cityButton').addEventListener('click', function(event){
    event.preventDefault();
    locationString = document.getElementById('city').value;
    getWeather(locationString)
})

function getWeather(locationString) {
fetch("https://chriscastle.com/proxy/?:proxy:http://api.weatherstack.com/current?access_key=467d2d28bb72eef64b59c2d804a83de6&query="+locationString+"&units=f")
.then(function (response) {
    console.log("hi");
    return response.json();
})
    .then(function(data) {
        console.log(data)
        var getWeatherCode = data.current.weather_code
        var getWindSpeed = data.current.wind_speed
        var getTemp = data.current.temperature
        var isDay = data.current.is_day
        console.log(getWindSpeed);
        console.log(getTemp);
        console.log(isDay);
        console.log(getWeatherCode);

        if (getWeatherCode > 310) {
          fetchPokemonsByType("ice");
          document.getElementById("img").src ="./assets/images/Snowing.gif";
          document.getElementById("img2").src ="./assets/images/Snowing.gif";
        }
        else if (getWeatherCode > 263) {
          fetchPokemonsByType("water")
          document.getElementById("img").src ="./assets/images/Raining.gif";
          document.getElementById("img2").src ="./assets/images/Raining.gif";
        }
        else if (getWeatherCode > 201) {
          fetchPokemonsByType("poison");
        }
        else if (getWeatherCode > 199) {
          fetchPokemonsByType("thunder");
        }
        else if (getWeatherCode > 115) {
          fetchPokemonsByType("grass");
          document.getElementById("img").src ="./assets/images/Grass-Sunny.gif";
          document.getElementById("img2").src ="./assets/images/Grass-Sunny.gif";
          }
        else if (getWeatherCode > 112) {
            fetchPokemonsByType("normal");
            document.getElementById("img").src ="./assets/images/Grass-Sunny.gif";
          document.getElementById("img2").src ="./assets/images/Grass-Sunny.gif";
        }
        
        if(getWindSpeed > 16) {
            fetchPokemonsByType("flying");
            document.getElementById("img").src ="./assets/images/Windy.gif";
            document.getElementById("img2").src ="./assets/images/Windy.gif";
        }

        if(getTemp > 80) {
          fetchPokemonsByType("fire");
            document.getElementById("img").src ="./assets/images/Fire.gif";
            document.getElementById("img2").src ="./assets/images/Fire.gif";
        }
})
}

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

