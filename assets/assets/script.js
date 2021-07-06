var apiKey = "e9a20f249fa58531725f5fd80e95a09a";
var searchForm = document.querySelector("#user-form");


function searchValue(event) {
    event.preventDefault();
    var searchValue = document.querySelector("#search-value").value;
    console.log(searchValue);
    getCurrentWeather(searchValue);
    document.getElementById("current-city").innerHTML = searchValue;
    var todayDate = moment().format('L');
    document.getElementById("current-date").innerHTML = todayDate;
}


function getCurrentWeather(searchValue) {
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + apiKey;


    fetch(queryUrl)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data.coord.lat);
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            queryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&current.weather.icon" + "&appid=" + apiKey;
            fetch(queryUrl)
                .then(function (res) {
                    return res.json()
                })
                .then(function (data) {
                    console.log(data);
                    var temp = data.current.temp;
                    var wind = data.current.wind_speed;
                    var humidity = data.current.humidity;
                    var uvi = data.current.uvi;
                    //icon??
                    var dateOne = document.getElementById("date-one");
                    dateOne = moment().add(1, 'days').format("MM-DD-YYYY");
                    document.getElementById("date-one").innerHTML = dateOne;
                    document.getElementById("temp").innerHTML = temp;
                    document.getElementById("wind").innerHTML = wind;
                    document.getElementById("humidity").innerHTML = humidity;
                    document.getElementById("uv-index").innerHTML = uvi;
                    //console.log(data.daily[0].temp.day);
                    //getting forecast to page
                    var temp = data.daily[0].temp.day;
                    var wind = data.daily[0].wind_speed;
                    var humidity = data.daily[0].humidity;
                    var dateTwo = document.getElementById("date-two");

                    dateTwo = moment().add(2, 'days').format("MM-DD-YYYY");
                    document.getElementById("date-two").innerHTML = dateTwo;
                    document.getElementById("temp-one").innerHTML = temp;
                    document.getElementById("wind-one").innerHTML = wind;
                    document.getElementById("humidity-one").innerHTML = humidity;


                    var temp = data.daily[1].temp.day;
                    var wind = data.daily[1].wind_speed;
                    var humidity = data.daily[1].humidity;
                    var dateThree = document.getElementById("date-three");

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


                    var temp = data.daily[3].temp.day;
                    var wind = data.daily[3].wind_speed;
                    var humidity = data.daily[3].humidity;
                    var dateFour = document.getElementById("date-four");

                    dateFour = moment().add(4, 'days').format("MM-DD-YYYY");
                    document.getElementById("date-four").innerHTML = dateFour;
                    document.getElementById("temp-four").innerHTML = temp;
                    document.getElementById("wind-four").innerHTML = wind;
                    document.getElementById("humidity-four").innerHTML = humidity;


                    var temp = data.daily[4].temp.day;
                    var wind = data.daily[4].wind_speed;
                    var humidity = data.daily[4].humidity;
                    var dateFive = document.getElementById("date-five");

                    dateFive = moment().add(5, 'days').format("MM-DD-YYYY");
                    document.getElementById("date-five").innerHTML = dateFive;
                    document.getElementById("temp-five").innerHTML = temp;
                    document.getElementById("wind-five").innerHTML = wind;
                    document.getElementById("humidity-five").innerHTML = humidity;

                
                    





                    var inputArray = [];

                    inputArray.push(searchValue);
                    console.log(searchValue);
                    
                    
                    //var container = document.getElementById("cities-list")
                    //btn.innerhtml = searchValue;
                    //document.container.appendChild(btn);

                    //console.log(inputArray);}

                })
        })
    }



searchForm.addEventListener("submit", searchValue);