function Thermostat() {
  this._temp = 20
  this._powerSave = 'on'
  this.MAX_TEMP_PSM_OFF = 32
  this.MAX_TEMP_PSM_ON = 25
}

Thermostat.prototype.temp = function(){
  return this._temp;
}

Thermostat.prototype.increaseTemp = function() {
  if (this._powerSave === 'on' && this._temp >= this.MAX_TEMP_PSM_ON) {
    this._temp = this.MAX_TEMP_PSM_ON;
  }
  else if (this._powerSave === 'off' && this._temp >= this.MAX_TEMP_PSM_OFF) {
    this._temp = this.MAX_TEMP_PSM_OFF;
  }
  else {
    this._temp += 1;
  }
}

Thermostat.prototype.decreaseTemp = function() {
  if (this._temp <= 10) {
    this._temp = 10;
  }
  else {
    this._temp -= 1;
  }
}

Thermostat.prototype.powerSave = function() {
  return this._powerSave;
}

Thermostat.prototype.powerSaveOff = function() {
  this._powerSave = 'off';
}

Thermostat.prototype.powerSaveOn = function() {
  this._powerSave = 'on';
}

Thermostat.prototype.reset = function() {
  this._temp = 20;
}

Thermostat.prototype.energyUsage = function() {
  if (this._temp < 18) {
    return 'Low';
  }
  else if (this._temp < 25) {
    return 'Medium';
  }
  else {
    return 'High';
  }
}

 var thermostat = new Thermostat();
 console.log(thermostat.increaseTemp());
