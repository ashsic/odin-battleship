import createGameboard from "./gameboard";

const createPlayer = () => {
  const randomCoords = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const trueOrFalse = Math.floor(Math.random() * 2);
    return [x, y, trueOrFalse];
  }

  const player = {
    gameboard: createGameboard(),
    enemy: null,

    sendAttack() {
      const x_coord = prompt('enter x coord')
      const y_coord = prompt('enter y coord')
      return [x_coord, y_coord];
    },

    placeRandomlyOnBoard() {
      console.log(this.gameboard.listShips())
      this.gameboard.listShips().forEach((ship) => {
        while (true) {
          let [x, y, trueOrFalse] = randomCoords();
          if (this.gameboard.placeShip(ship, x, y, trueOrFalse)) {
            break;
          }
        }
        
      })
    },
  }

  return player;
}

export default createPlayer;
