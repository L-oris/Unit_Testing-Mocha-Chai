function checkForShip(player,location){

  let shipIsPresent

  player.ships.forEach(ship=>{

    shipIsPresent = ship.locations.filter(actualCoordinate=>{
      return (actualCoordinate[0]===location[0] && actualCoordinate[1]===location[1])
    })

  })
  return shipIsPresent.length>0
}

module.exports.checkForShip = checkForShip
