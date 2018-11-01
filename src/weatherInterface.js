$(document).ready(function () {

  $('#search-button').click(function() {
    var city = $('#input-city').val();
    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=228203a5380aed8adfe651896e6bfdfc`, function(response) {
      $('#city-name').text("Temperature in " + city + ": ");
      $('#current-temperature').text(response.main.temp);
    });
  });
});
