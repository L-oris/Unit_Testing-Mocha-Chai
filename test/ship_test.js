const {assert} = require('chai')


describe('checkForShip()',function(){

  //import 'checkForShip' function to test
  const {checkForShip} = require('../game_logic/ship_methods')


  it(`should report no ship at a given player's coordinate`, function(){

    //create dump obj player, assuming has a ship at [0,0]
    const player = {
      ships: [
        {
          locations: [[0,0]]
        }
      ]
    }

    assert.isFalse(checkForShip(player,[9,9]))
  })

})
