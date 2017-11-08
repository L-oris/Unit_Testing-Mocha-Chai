function checkForShip(player,location){

  let shipIsPresent

  for(let i=0;i<player.ships.length;i++){
    shipIsPresent = player.ships[i].locations.filter(actualCoordinate=>{
      return (actualCoordinate[0]===location[0] && actualCoordinate[1]===location[1])
    })

    if(shipIsPresent.length>0) return true
  }

  return false
}

module.exports.checkForShip = checkForShip
