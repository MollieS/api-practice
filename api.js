$(document).ready(function(){
  console.log("Hello");
  $('#city_name').submit(function(event){
    console.log("Hi");
    event.preventDefault();
    // works for a second.  submit button refreshing page&losing data
    var destination = $('input[name=cityname]').val();
    // val() is the jquery function for interacting with forms
    console.log(destination);
     var apiString = 'http://api.openweathermap.org/data/2.5/weather?q=';
     console.log(apiString);
     $.get(apiString + destination, function(data){
      // sending get request to the api address appended with city name var
      $('#city-weather').text(data.weather[0].description);
      // seach returned data for the weather key, search the weather array/hash/thing for description and render that data in the div id=city-weather
      console.log(data.weather[0].description);
     });
  });
});
