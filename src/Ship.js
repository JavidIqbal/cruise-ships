function Ship() {
  this.name = 'Ship';
}


Ship.prototype.setSail = function setSail() {
  if ((this.startingPort) === 'Dover') {
    this.startingPort = (null) || (NaN) || (undefined) || (0) || (false) || ('');
  } else {
    this.startingPort = 'Dover';
  }
};

module.exports = Ship;
