import createGameboard from "./gameboard";

const createComputerPlayer = () => {
  const randomCoords = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const trueOrFalse = Math.floor(Math.random() * 2);
    return [x, y, trueOrFalse];
  }

  const computerPlayer = {
    gameboard: createGameboard(),
    enemy: null,

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

    sendRandomAttack() {
      const [x, y] = randomCoords();
      return [x, y];
    }
  }

  return computerPlayer;
}

export default createComputerPlayer;
