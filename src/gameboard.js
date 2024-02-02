import createShip from "./ship";

// createGameboard function creates a gameboard hardcoded to size 10x10
// each cell has 4 states:
//  0: empty
//  1: empty, hit
//  ship: occupied
//  2: occupied, hit

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
    
    placeShip(ship, x_coord, y_coord, isHorizontal=true) {
      if (!this.isValidShipPlacement(ship.shipLength, x_coord, y_coord, isHorizontal)) {
        return false; // invalid placement, throw error?
      }

      const newShip = createShip(ship.shipName, ship.shipLength);

      if (isHorizontal) {
        for (let x = x_coord; x < x_coord + ship.shipLength; x++) {
          this.board[y_coord][x] = newShip; // Update the board
        }
      } else {
        for (let y = y_coord; y < y_coord + ship.shipLength; y++) {
          this.board[y][x_coord] = newShip; // Update the board
        }
      }
      
      return true;
    },

    isValidAttack(x_coord, y_coord) {
      if (x_coord < 0 || y_coord < 0 || x_coord > 9 || y_coord > 9) {
        return false; // Please enter a valid set of coordinates. x,y must be >= 0 and <= 9
      } else if (this.board[y_coord][x_coord] === 1 || this.board[y_coord][x_coord] === 2) {
        return false; // coord already hit, throw error/retry
      }

      return true;
    },

    receiveAttack(x_coord, y_coord) {
      
      if (!this.isValidAttack(x_coord, y_coord)) {
        return false; // invalid attack, throw error, retry
      }

      if (this.board[y_coord][x_coord] === 0) {
        this.board[y_coord][x_coord] = 1;
        console.log(this.board, x_coord, y_coord)
        return 'Shot missed.';
      } else {

        this.board[y_coord][x_coord].hit()

        if (this.board[y_coord][x_coord].isSunk()) {
          this.shipSunk();
          console.log('ship sunk!', this.sunkShips);
        }

        this.board[y_coord][x_coord] = 2;
        console.log(this.board, x_coord, y_coord)
        return 'Shot hit!'; 
      }
    }

  }

  return gameboard;
}



export default createGameboard;