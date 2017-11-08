const {assert} = require('chai')


describe('checkForShip()',function(){

  //import 'checkForShip' function to test
  const {checkForShip} = require('../game_logic/ship_methods')
  let player

  //this function will run before any of the test specs, to setup any state they need
  before(function(){
    player = {
      ships: [
        {
          locations: [[0,0], [1,0],[2,0]]
        },
        {
          locations: [[5,2], [5,3],[5,4],[5,5]]
        },
        {
          locations: [[7,1], [7,2]]
        }
      ]
    }
  })

  it(`should report no ship at a given player's coordinate`, function(){
    assert.isFalse(checkForShip(player,[9,9]))
  })


  it(`should report a ship located at given player's coordinate`, function(){
    assert.deepEqual(checkForShip(player,[0,0]), player.ships[0])
  })


  it(`should handle ships located at more than one coordinate`, function(){
    assert.isFalse(checkForShip(player,[2,2]))
    assert.deepEqual(checkForShip(player,[2,0]), player.ships[0])
    assert.deepEqual(checkForShip(player,[1,0]), player.ships[0])
  })


  it(`should handle checking multiple ships`, function(){
    assert.isFalse(checkForShip(player,[2,2]))
    assert.deepEqual(checkForShip(player,[2,0]), player.ships[0])
    assert.deepEqual(checkForShip(player,[5,3]), player.ships[1])
    assert.deepEqual(checkForShip(player,[7,1]), player.ships[2])
    assert.isFalse(checkForShip(player,[9,9]))
  })

})



describe('damageShip()',function(){

  const {damageShip} = require('../game_logic/ship_methods')

  it(`should register damage on a given ship at a given location`, function(){
    const ship = {
      locations: [[0,0]],
      damage: []
    }
    damageShip(ship, [0,0])

    assert.isNotEmpty(ship.damage)
    assert.deepEqual(ship.damage[0],[0,0])
  })

})



describe('fireShip()',function(){

  const {fireShip} = require('../game_logic/ship_methods')

  it(`should record damage on given player ship at given coordinate`, function(){
    const player = {
      ships: [
        {
          locations: [[0,0]],
          damage: []
        }
      ]
    }
    fireShip(player,[0,0])

    assert.deepEqual(player.ships[0].damage[0], [0,0])
  })

  it(`should NOT record damage if there's no ship at given coordinates`, function(){
    const player = {
      ships: [
        {
          locations: [[0,0]],
          damage: []
        }
      ]
    }
    fireShip(player,[9,9])

    assert.isEmpty(player.ships[0].damage)
  })

})
