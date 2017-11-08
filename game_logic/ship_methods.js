function checkForShip(player,location){

  let ship, shipIsPresent

  for(let i=0;i<player.ships.length;i++){

    ship = player.ships[i]
    shipIsPresent = ship.locations.filter(actualCoordinate=>{
      return (actualCoordinate[0]===location[0] && actualCoordinate[1]===location[1])
    })[0]

    if(shipIsPresent) return ship
  }

  return false
}


function damageShip(ship,location){
  ship.damage.push(location)
}


function fireShip(player,location){
  const ship = checkForShip(player,location)

  if(ship){
    damageShip(ship,location)
  }
}


module.exports = {
  checkForShip,
  damageShip,
  fireShip
}
