var apiKey = "e9a20f249fa58531725f5fd80e95a09a";
var searchForm = document.querySelector("#user-form");
var searchValue;

function searchValueFunction(event) {
    event.preventDefault();
    searchValue = document.querySelector("#search-value").value;
    // console.log(searchValue);
    getCurrentWeather(searchValue);
}


function getCurrentWeather(searchValue) {
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + apiKey;
    document.getElementById("current-city").innerHTML = searchValue;
    var todayDate = moment().format('L');
    document.getElementById("current-date").innerHTML = todayDate;

    fetch(queryUrl)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            queryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&current.weather.icon" + "&appid=" + apiKey;
            fetch(queryUrl)
                .then(function (res) {
                    return res.json()
                })
                .then(function (data) {
                    var icon = data.current.weather[0].icon;
                    var currentWeatherIcon =  "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                    document.getElementById("current-weather-icon").setAttribute("src", currentWeatherIcon);
                    var temp = data.current.temp;
                    var wind = data.current.wind_speed;
                    var humidity = data.current.humidity;
                    var uvi = data.current.uvi;
                    //setting uvi color warning
                    var uvElement = document.getElementById("uv-index");

                    if (uvi > 7){
                        uvElement.style.backgroundColor = "red";
                        
                    }

                    if (uvi >= 3 && uvi <= 7) {
                        uvElement.style.backgroundColor = "orange";
                       
                    }

                    if (uvi < 3) {
                        uvElement.style.backgroundColor = "green";
                        
                    }
                    
                    //day one
                    var dayOneIcon = data.daily[0].weather[0].icon;
                    var dayOneWeatherIcon =  "http://openweathermap.org/img/wn/" + dayOneIcon + "@2x.png";
                    document.getElementById("icon-day-one").setAttribute("src", dayOneWeatherIcon);
                    var dateOne = document.getElementById("date-one");
                    dateOne = moment().add(1, 'days').format("MM-DD-YYYY");
                    document.getElementById("date-one").innerHTML = dateOne;
                    document.getElementById("temp").innerHTML = temp;
                    document.getElementById("wind").innerHTML = wind;
                    document.getElementById("humidity").innerHTML = humidity;
                    document.getElementById("uv-index").innerHTML = uvi;
                    
                    //getting forecast to page
                    var temp = data.daily[0].temp.day;
                    var wind = data.daily[0].wind_speed;
                    var humidity = data.daily[0].humidity;
                    var dateTwo = document.getElementById("date-two");

                    //day two
                    var dayTwoIcon = data.daily[1].weather[0].icon;
                    var dayTwoWeatherIcon =  "http://openweathermap.org/img/wn/" + dayTwoIcon + "@2x.png";
                    document.getElementById("icon-day-two").setAttribute("src", dayTwoWeatherIcon);
                    dateTwo = moment().add(2, 'days').format("MM-DD-YYYY");
                    document.getElementById("date-two").innerHTML = dateTwo;
                    document.getElementById("temp-one").innerHTML = temp;
                    document.getElementById("wind-one").innerHTML = wind;
                    document.getElementById("humidity-one").innerHTML = humidity;


                    var temp = data.daily[1].temp.day;
                    var wind = data.daily[1].wind_speed;
                    var humidity = data.daily[1].humidity;
                    var dateThree = document.getElementById("date-three");

                    //day three
                    var dayThreeIcon = data.daily[2].weather[0].icon;
                    var dayThreeWeatherIcon =  "http://openweathermap.org/img/wn/" + dayThreeIcon + "@2x.png";
                    document.getElementById("icon-day-three").setAttribute("src", dayThreeWeatherIcon);
                    dateThree = moment().add(3, 'days').format("MM-DD-YYYY");
                    document.getElementById("date-three").innerHTML = dateThree;
                    document.getElementById("temp-two").innerHTML = temp;
                    document.getElementById("wind-two").innerHTML = wind;
                    document.getElementById("humidity-two").innerHTML = humidity;


                    var temp = data.daily[2].temp.day;
                    var wind = data.daily[2].wind_speed;
                    var humidity = data.daily[2].humidity;


                    document.getElementById("temp-three").innerHTML = temp;
                    document.getElementById("wind-three").innerHTML = wind;
                    document.getElementById("humidity-three").innerHTML = humidity;

                    //day four
                    var temp = data.daily[3].temp.day;
                    var wind = data.daily[3].wind_speed;
                    var humidity = data.daily[3].humidity;
                    var dateFour = document.getElementById("date-four");
                    dateFour = moment().add(4, 'days').format("MM-DD-YYYY");
                    document.getElementById("date-four").innerHTML = dateFour;
                    var dayFourIcon = data.daily[3].weather[0].icon;
                    var dayFourWeatherIcon =  "http://openweathermap.org/img/wn/" + dayFourIcon + "@2x.png";
                    document.getElementById("icon-day-four").setAttribute("src", dayFourWeatherIcon);

                    document.getElementById("temp-four").innerHTML = temp;
                    document.getElementById("wind-four").innerHTML = wind;
                    document.getElementById("humidity-four").innerHTML = humidity;
                    
                    //day five
                    var temp = data.daily[4].temp.day;
                    var wind = data.daily[4].wind_speed;
                    var humidity = data.daily[4].humidity;
                    var dateFive = document.getElementById("date-five");
                    var dayFiveIcon = data.daily[4].weather[0].icon;
                    var dayFiveWeatherIcon =  "http://openweathermap.org/img/wn/" + dayFiveIcon + "@2x.png";
                    document.getElementById("icon-day-five").setAttribute("src", dayFiveWeatherIcon);

                    dateFive = moment().add(5, 'days').format("MM-DD-YYYY");
                    document.getElementById("date-five").innerHTML = dateFive;
                    document.getElementById("temp-five").innerHTML = temp;
                    document.getElementById("wind-five").innerHTML = wind;
                    document.getElementById("humidity-five").innerHTML = humidity;






                    cityAdder();


                })
        })
}
//storing previous cities
function cityAdder() {
    var cityArray = [];
    var searchHistory = localStorage.getItem('cities');

    if (searchHistory) {
        searchHistory = JSON.parse(searchHistory);
        for (let index = 0; index < searchHistory.length; index++) {
            cityArray.push(searchHistory[index]);
        }
    }
    if (searchValue) {
        cityArray.push(searchValue);
    }
    //preventing duplicates
    var removeDuplicates = new Set(cityArray);
    var newArray = [...removeDuplicates];

    localStorage.setItem('cities', JSON.stringify(newArray));
    appendList(newArray);
}
//adding to the page
function appendList(cityArray) {
    console.log(cityArray);
    const parentElement = document.getElementById("cities-list");
    document.getElementById("cities-list").innerHTML = "";
    for (let index = 0; index < cityArray.length; index++) {
        var element = document.createElement("button");
        element.setAttribute("data-city", cityArray[index]);
        element.setAttribute("class", "city-button");
        element.innerHTML = cityArray[index];
        parentElement.appendChild(element);
    }
    addButtonClick();
}
// bring back stored city info
function pullFromButton(event) {
    event.preventDefault;
    var getCity = event.target;
    getCity = getCity.getAttribute("data-city");
    console.log(getCity);
    getCurrentWeather(getCity);
}

cityAdder();
searchForm.addEventListener("submit", searchValueFunction);


function addButtonClick() {
    var buttons = document.getElementsByClassName("city-button");
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener('click', pullFromButton, false);

    }
}