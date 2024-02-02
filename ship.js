const createShip = (shipName, shipLength) => {
  const ship = {
    name: shipName,
    length: shipLength,
    hits: 0,

    // Method for adding hits:
    hit() {
      this.hits += 1;
    },

    // Bool returning method for whether or not ship is sunk
    isSunk() {
      return this.hits === this.length;
    }
  }

  return ship;
}

export default createShip;