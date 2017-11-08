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


  it(`should report a ship located at given player's coordinate`, function(){
    const player = {
      ships: [
        {
          locations: [[0,0]]
        }
      ]
    }

    assert.isTrue(checkForShip(player,[0,0]))
  })


  it(`should handle ships located at more than one coordinate`, function(){
    const player = {
      ships: [
        {
          locations: [[0,0], [1,0],[2,0]]
        }
      ]
    }

    assert.isFalse(checkForShip(player,[2,2]))
    assert.isTrue(checkForShip(player,[2,0]))
    assert.isTrue(checkForShip(player,[1,0]))
  })


  it(`should handle checking multiple ships`, function(){
    const player = {
      ships: [
        {
          locations: [[0,0], [1,0],[2,0]]
        },
        {
          locations: [[5,2], [5,3],[5,4],[5,5]]
        },
        {
          locations: [[7,1], [7,2]]
        },
      ]
    }

    assert.isFalse(checkForShip(player,[2,2]))
    assert.isTrue(checkForShip(player,[2,0]))
    assert.isTrue(checkForShip(player,[5,3]))
    assert.isTrue(checkForShip(player,[7,1]))
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
