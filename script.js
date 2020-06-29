function renderPage() {
    var inputElement = document.getElementById("city-input");
    var searchElement = document.getElementById("search-button");
    var clearElement = document.getElementById("clear-history");
    var nameEl = document.getElementById("city-name");
    var currentPicEl = document.getElementById("current-pic");
    var tempElement = document.getElementById("temperature");
    var humidityElement = document.getElementById("humidity");4
    var windElement = document.getElementById("wind-speed");
    var uvIndexElement = document.getElementById("UV-index");
    var historyElement = document.getElementById("history");
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
                  var weatherPic = response.data.weather[0].icon;
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
              
              var cityID = response.data.id;
              var forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + APIKey;
              axios.get(forecastQueryURL)
              .then(function(response){

                  console.log(response);

                  var forecastElements = document.querySelectorAll(".forecast");
                  for (i=0; i<forecastElements.length; i++) {
                        forecastElements[i].innerHTML = "";
                      
                      var forecastIndex = i*8 + 4;
                      var forecastDate = new Date(response.data.list[forecastIndex].dt * 1000);
                      var forecastDay = forecastDate.getDate();
                      var forecastMonth = forecastDate.getMonth() + 1;
                      var forecastYear = forecastDate.getFullYear();
                      var forecastDateEl = document.createElement("p");
                      
                      forecastDateEl.setAttribute("class","mt-3 mb-0 forecast-date");
                      forecastDateEl.innerHTML = forecastMonth + "/" + forecastDay + "/" + forecastYear;
                      forecastElements[i].append(forecastDateEl);
                      
                      var forecastWeatherElement = document.createElement("img");
                      forecastWeatherElement.setAttribute("src","https://openweathermap.org/img/wn/" + response.data.list[forecastIndex].weather[0].icon + "@2x.png");
                      forecastWeatherElement.setAttribute("alt",response.data.list[forecastIndex].weather[0].description);
                      forecastElements[i].append(forecastWeatherElement);
                      
                      var forecastTempElement = document.createElement("p");
                      forecastTempElement.innerHTML = "Temp: " + k2f(response.data.list[forecastIndex].main.temp) + " &#176F";
                      forecastElements[i].append(forecastTempElement);
                      
                      var forecastHumidityElement = document.createElement("p");
                      forecastHumidityElement.innerHTML = "Humidity: " + response.data.list[forecastIndex].main.humidity + "%";
                      forecastElements[i].append(forecastHumidityElement);
                      }
                  })
              });  
          }

          searchElement.addEventListener("click",function() {
            var searchTerm = inputElement.value;
            getWeather(searchTerm);
            searchHistory.push(searchTerm);
            localStorage.setItem("search",JSON.stringify(searchHistory));
            renderSearchHistory();
        })

        clearElement.addEventListener("click",function() {
            searchHistory = [];
            renderSearchHistory();
        })
    function clearHistory(){
    clearHistory = (localStorage.clear("clear-history"))
}
    clearHistory()
    
    function k2f(K) {
        return Math.floor((K - 273.15) *1.8 +32);
    }
  
    function renderSearchHistory() {
        historyElement.innerHTML = "";
        for (var i=0; i<searchHistory.length; i++) {
            var historyItem = document.createElement("input");
   
            historyItem.setAttribute("type","text");
            historyItem.setAttribute("readonly",true);
            historyItem.setAttribute("class", "form-control d-block bg-white");
            historyItem.setAttribute("value", searchHistory[i]);
            historyItem.addEventListener("click",function() {
                getWeather(historyItem.value);
            })
            historyElement.append(historyItem);
        }
    }
  
    renderSearchHistory();
    if (searchHistory.length > 0) {
        getWeather(searchHistory[searchHistory.length - 1]);
    }
  


} 
  renderPage();