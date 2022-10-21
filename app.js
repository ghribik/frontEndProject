setTimeout(() =>{
  $("#submitKey").on("click", function(){getWeather()});
}, "1000");

function getWeather(){

  $("strong").empty();
  $("#loadingSpinner").css("visibility", "visible");

  const $city = $("#cityInput").val();
  const $key = $("#inputKey").val();
  userInput = "https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/forecast?access_key=" + $key + "&query=" + $city;

  $.get(userInput, (data) => {
    console.log(data) //--> Test to see how the data is formatted

    let $citySubstring = $(`<strong> ${data.location.name}, ${data.location.region}, ${data.location.country}
     <br> Lat: ${data.location.lat} and Long: ${data.location.lon}</strong>`);
    $(".currentCity").append($citySubstring);

    let $description = $(`<strong> ${data.current.weather_descriptions[0]} </strong>`);
    $("#currentWeather").append($description);
    $("#currentWeather").append(`<strong><img src="${data.current.weather_icons[0]}"></strong>`);

    const date = new Date();
    let day = date.getDate()-1;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    //console.log(currentDate); //--> Test to see how the date is formatted

    let fTemp = cToF(data.current.temperature);
    let roundedFTemp = twoDecimals(fTemp);
    let fTempMax = cToF(data.forecast[currentDate].maxtemp);
    let roundedFTempMax = twoDecimals(fTempMax);
    let fTempMin = cToF(data.forecast[currentDate].mintemp);
    let roundedFTempMin = twoDecimals(fTempMin);
    let fTempAvg = cToF(data.forecast[currentDate].avgtemp);
    let roundedFTempAvg = twoDecimals(fTempAvg);

    let $temperature = $(`<strong> <br> Current: ${data.current.temperature}°C --> ${roundedFTemp}°F <br>
    Max: ${data.forecast[currentDate].maxtemp}°C --> ${roundedFTempMax}°F <br>
    Min: ${data.forecast[currentDate].mintemp}°C --> ${roundedFTempMin}°F <br>
    Avg: ${data.forecast[currentDate].avgtemp}°C --> ${roundedFTempAvg}°F </strong>`);
    $("#currentTemperature").append($temperature);

    let mph = kphToMph(data.current.wind_speed);
    let roundedMph = twoDecimals(mph);
    let $wind = $(`<strong> ${data.current.wind_speed} km/h --> ${roundedMph} mph <br>
    Direction: ${data.current.wind_dir} and Degree: ${data.current.wind_degree}</strong>`);
    $("#currentWind").append($wind);

    let $humidity = $(`<strong> ${data.current.humidity} % </strong>`)
    $("#currentHumidity").append($humidity);

    let precipInches = mmToInches(data.current.precip);
    let roundedPrecipInches = twoDecimals(precipInches);
    let $precip = $(`<strong> ${data.current.precip} mm --> ${roundedPrecipInches} in </strong>`);
    $("#currentPrecip").append($precip);

    let $sun = $(`<strong> ${data.forecast[currentDate].astro.sunrise} sunrise <br> 
    ${data.forecast[currentDate].astro.sunset} sunset <br> 
    ${data.forecast[currentDate].sunhour} hours of sunlight! </strong>`);
    $("#currentSun").append($sun);

    let $moon = $(`<strong> ${data.forecast[currentDate].astro.moonrise} moonrise <br>
    ${data.forecast[currentDate].astro.moonset} moonset <br> 
    moon phase is ${data.forecast[currentDate].astro.moon_phase} </strong>`);
    $("#currentMoon").append($moon);

    setTimeout(() =>{
      $("#loadingSpinner").css("visibility", "hidden");
    }, "1000");
 
  })
}

function cToF(cTemp){
  let cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
}

function kphToMph(kph){
  let mph = kph/1.609344;
  return mph;
}

function mmToInches(mm){
  let inches = 25.4 * mm;
  return inches;
}

function twoDecimals(num){
  return Number(num).toFixed(2);
}

function newTab(url) {
  window.open(url, "_blank");
}