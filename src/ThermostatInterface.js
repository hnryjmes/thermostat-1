$(document).ready(function () {
  // alert("Welcome!")
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temp())
  $('#temperature').attr('class', thermostat.energyUsage())
  $('#temperature-up').click(function() {
    thermostat.increaseTemp();
    $('#temperature').text(thermostat.temp());
    $('#power-usage').text(thermostat.energyUsage())
    $('#temperature').attr('class', thermostat.energyUsage())
  })
  $('#temperature-down').click(function() {
    thermostat.decreaseTemp();
    $('#temperature').text(thermostat.temp());
    $('#power-usage').text(thermostat.energyUsage())
    $('#temperature').attr('class', thermostat.energyUsage())
  })
  $('#temperature-reset').click(function() {
    thermostat.reset();
    $('#temperature').text(thermostat.temp());
    $('#power-usage').text(thermostat.energyUsage())
    $('#temperature').attr('class', thermostat.energyUsage())
  })
  $('#power-saving-on').click(function() {
    thermostat.powerSaveOn();
    $('#power-saving-mode').text(thermostat.powerSave())
  })
  $('#power-saving-off').click(function() {
    thermostat.powerSaveOff();
    $('#power-saving-mode').text(thermostat.powerSave())
  })
  $('#power-saving-mode').text(thermostat.powerSave())

  $('#power-usage').text(thermostat.energyUsage())

});
