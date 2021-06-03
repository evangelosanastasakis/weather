

$.getJSON("https://openweathermap.org/data/2.5/weather?q=Stockholm&appid=0e2bc4d71578be0f8ac30ea9d2114fef", 
function(data) {
    console.log(data);

    var icon = "https://openweathermap.org/img/w" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;

    $('.icon').attr('src', icon);
    $('weather').append(weather);
    $('.temp').append(temp);
  }
);