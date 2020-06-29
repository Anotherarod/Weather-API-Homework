function renderPage() {
    var inputEl = document.getElementById("city-input");
    var searchEl = document.getElementById("search-button");
    var clearEl = document.getElementById("clear-history");
    var nameEl = document.getElementById("city-name");
    var currentPicEl = document.getElementById("current-pic");
    var currentTempEl = document.getElementById("temperature");
    var currentHumidityEl = document.getElementById("humidity");4
    var currentWindEl = document.getElementById("wind-speed");
    var currentUVEl = document.getElementById("UV-index");
    var historyEl = document.getElementById("history");
    var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory);
    
  
    var APIKey = "257dd9a9e57952ff496d8ab275bb751a";


    function getWeather(cityName) {
  
              var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
              axios.get(queryURL)
              .then(function(response){
                  console.log(response);
  
                  var currentDate = new Date(response.data.dt*1000);
                  console.log(currentDate);
                  var day = currentDate.getDate();
                  var month = currentDate.getMonth() + 1;
                  var year = currentDate.getFullYear();
                  nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
                  let weatherPic = response.data.weather[0].icon;
                  currentPicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
                  currentPicEl.setAttribute("alt",response.data.weather[0].description);
                  tempElement.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
                  humidityElement.innerHTML = "Humidity: " + response.data.main.humidity + "%";
                  windElement.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
              var lat = response.data.coord.lat;
              var lon = response.data.coord.lon;
              var UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";
              axios.get(UVQueryURL)
              .then(function(response){
                  var UVIndex = document.createElement("span");
                  UVIndex.setAttribute("class","badge badge-danger");
                  UVIndex.innerHTML = response.data[0].value;
                  uvIndexElement.innerHTML = "UV Index: ";
                  uvIndexElement.append(UVIndex);
              });
        //  Using saved city name, execute a 5-day forecast get request from open weather map api
              var cityID = response.data.id;
              var forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + APIKey;
              axios.get(forecastQueryURL)
              .then(function(response){
        //  Parse response to display forecast for next 5 days underneath current conditions
                  console.log(response);
 
  