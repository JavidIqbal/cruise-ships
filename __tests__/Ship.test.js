/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  describe('setSail', () => {
    it('can set sail', () => {
      const ship = new Ship('Boatie Mcboatface');
      ship.startingPort = ('Dover');
      ship.setSail();
      expect(ship.startingPort).toBeFalsy();
    });
  });
});

