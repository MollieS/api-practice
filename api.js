$(document).ready(function(){
  console.log("Hello");
  $('#city_name').submit(function(event){
    console.log("Hi");
    event.preventDefault();
    // works for a second.  submit button refreshing page&losing data
    var destination = $('input[name=cityname]').val();
    // val() is the jquery function for interacting with forms
    console.log(destination);


  });
});
