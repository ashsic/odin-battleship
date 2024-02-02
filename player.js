
const createGameboard = () => {
  const shipList = [
    {
      shipName: 'Carrier',
      shipLength: 5
    },
    {
      shipName: 'Battleship',
      shipLength: 4
    },
    {
      shipName: 'Destroyer',
      shipLength: 3
    },
    {
      shipName: 'Submarine',
      shipLength: 3
    },
    {
      shipName: 'Patrol Boat',
      shipLength: 2
    }
  ];

  const gameboard = {
    sunkShips: 0,
    board: [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0]
    ],

    listShips() {
      return shipList;
    },

    shipSunk() {
      this.sunkShips++;
    },

    gameOver() {
      if (this.sunkShips === 5) {
        return 'Game over!';
      }
    },

    isValidShipPlacement(shipLength, x_coord, y_coord, isHorizontal) {
      if (x_coord < 0 || y_coord < 0 || x_coord > 9 || y_coord > 9) {
        return; // Please enter a valid set of coordinates. x,y must be >= 0 and <= 9
      } 
      
      if (isHorizontal) {
        if (x_coord + shipLength - 1 > 9) {
          return false; // Ship will be out of range
        }
        for (let x = x_coord; x < x_coord + shipLength; x++) {
          if (this.board[y_coord][x] != 0) {
            return false; // position already taken
          }
        }
      } else {
        if (y_coord + shipLength - 1 > 9) {
          return false; // Ship will be out of range
        }
        for (let y = y_coord; y < y_coord + shipLength; y++) {
          if (this.board[y][x_coord] != 0) {
            return false; // position already taken
          }
        }
      }

      return true;
    },
    
    placeShip(shipLength, x_coord, y_coord, isHorizontal=true) {
      if (!this.isValidShipPlacement(shipLength, x_coord, y_coord, isHorizontal)) {
        return; // invalid placement, throw error
      }

      const newShip = createShip(shipLength);

      if (isHorizontal) {
        for (let x = x_coord; x < x_coord + shipLength; x++) {
          this.board[y_coord][x] = newShip; // Update the board
        }
      } else {
        for (let y = y_coord; y < y_coord + shipLength; y++) {
          this.board[y][x_coord] = newShip; // Update the board
        }
      }
      
      return newShip;
    },

    isValidAttack(x_coord, y_coord) {
      if (x_coord < 0 || y_coord < 0 || x_coord > 9 || y_coord > 9) {
        return false; // Please enter a valid set of coordinates. x,y must be >= 0 and <= 9
      } else if (this.board[y_coord][x_coord] === 1 || this.board[y_coord][x_coord] == 2) {
        return false; // coord already hit, throw error/retry
      }

      return true;
    },

    receiveAttack(x_coord, y_coord) {
      if (!this.isValidAttack(x_coord, y_coord)) {
        return; // invalid attack, throw error, retry
      }

      if (this.board[y_coord][x_coord] === 0) {
        this.board[y_coord][x_coord] = 1;
        return 'Shot missed.';
      } else {

        this.board[y_coord][x_coord].hit()

        if (this.board[y_coord][x_coord].isSunk()) {
          console.log('ship sunk!')
        }

        this.board[y_coord][x_coord] = 2;
        return 'Shot hit!'; 
      }
    }

  }

  return gameboard;
}




// export default createGameboard;

// import createGameboard from "./gameboard";

const createPlayer = () => {
  const player = {
    gameboard: createGameboard(),
    enemy: null,

    sendAttack() {
      const x_coord = prompt('enter x coord')
      const y_coord = prompt('enter y coord')
    },
  }

  return player;
}

const player1 = createPlayer()

player1.gameboard.listShips()





// export default createPlayer;