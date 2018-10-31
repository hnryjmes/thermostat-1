$(document).ready(function () {
  var thermostat = new Thermostat();
  updateTemperature();
  updatePowerSave();
  updatePowerUsage();
  updateColour();

  $('#temperature-up').click(function() {
    thermostat.increaseTemp();
    updateTemperature();
    updatePowerUsage();
    updateColour();
  })
  $('#temperature-down').click(function() {
    thermostat.decreaseTemp();
    updateTemperature();
    updatePowerUsage();
    updateColour();
  })
  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
    updatePowerUsage();
    updateColour();
  })
  $('#power-saving-on').click(function() {
    thermostat.powerSaveOn();
    updatePowerSave();
  })
  $('#power-saving-off').click(function() {
    thermostat.powerSaveOff();
    updatePowerSave();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temp())
  }

  function updatePowerSave() {
    $('#power-saving-mode').text(thermostat.powerSave())
  }

  function updatePowerUsage() {
    $('#power-usage').text(thermostat.energyUsage())
  }

  function updateColour() {
    $('#temperature').attr('class', thermostat.energyUsage())
  }
});
