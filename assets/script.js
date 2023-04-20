// Weather API
var locationString = "";
var weatherContainer = document.getElementById("weather");
var userData = localStorage.getItem('city')
console.log(userData)



document.getElementById('cityButton').addEventListener('click', function(event){
    event.preventDefault();
    pokeList.innerHTML = "";
    locationString = document.getElementById('city').value;
    getWeather(locationString)
    localStorage.setItem('city', locationString)

})
// Fetches weather API
function getWeather(locationString) {
fetch("https://chriscastle.com/proxy/?:proxy:http://api.weatherstack.com/current?access_key=79fe4931f6aec9fd7ed75babcf10bfc8&query="+locationString+"&units=f")
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
        var getDesc = data.current.weather_descriptions
        console.log(getWindSpeed);
        console.log(getTemp);
        console.log(isDay);
        console.log(getWeatherCode);
            
// Displays current weather
        document.getElementById("temp").textContent = "Temperature: " + getTemp;
        document.getElementById("weatherDesc").textContent = "Weather: " + getDesc;
        document.getElementById("windSpeed").textContent = "Windspeed: " + getWindSpeed;
// Displays type of pokemon and changes animation 

        if(isDay === "no") {
          fetchPokemonsByType("dark");
        }

        if(getWeatherCode > 385) {
          fetchPokemonsByType("electric");
          document.getElementById("img").src ="./assets/images/Lightning.gif";
          document.getElementById("img2").src ="./assets/images/Lightning.gif";
        }
        else if (getWeatherCode > 361) {
          fetchPokemonsByType("ice");
          document.getElementById("img").src ="./assets/images/Snowing.gif";
          document.getElementById("img2").src ="./assets/images/Snowing.gif";
        }
        else if (getWeatherCode > 352) {
          fetchPokemonsByType("water")
          document.getElementById("img").src ="./assets/images/Raining.gif";
          document.getElementById("img2").src ="./assets/images/Raining.gif";
        }
        else if (getWeatherCode > 310) {
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
          document.getElementById("img").src ="./assets/images/poison.gif";
          document.getElementById("img2").src ="./assets/images/poison.gif";
        }
        else if (getWeatherCode > 199) {
          fetchPokemonsByType("electric");
          document.getElementById("img").src ="./assets/images/Lightning.gif";
          document.getElementById("img2").src ="./assets/images/Lightning.gif";

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
        
        if(getWindSpeed > 14) {
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
        var results = data.pokemon.map(pokemon => pokemon.pokemon.name);
        var randomPokemon = getRandomPokemon(results, 20);
        console.log(randomPokemon)
        for (var i = 0; i < randomPokemon.length; i++){
          var listItem = document.createElement('li');
          listItem.textContent = randomPokemon[i];
          pokeList.appendChild(listItem);
          console.log(listItem);
        }
        })};
  
  
    
    function getRandomPokemon(array, size){
      var shuffled = array.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, size);
    }
  
    getWeather(userData)