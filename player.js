import createGameboard from "./gameboard";

const createPlayer = () => {
  const player = {
    board: createGameboard(),

    makeMove() {
      const x_coord = prompt('enter x coord')
      const y_coord = prompt('enter y coord')
    },

    makeRandomMove() {

    }
  }
  
}

export default createPlayer;