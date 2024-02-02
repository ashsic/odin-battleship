import createPlayer from './player';
import createComputerPlayer from './computerPlayer';

// Gameloop

// initializing player and CPU

const player = createPlayer();
const CPU = createComputerPlayer();

CPU.placeRandomlyOnBoard();
player.placeRandomlyOnBoard();


while (true) {
  // CPU turn
  while (true) {
    let result = player.gameboard.receiveAttack(...CPU.sendRandomAttack())
    if (result) {
      console.log(result);
      break;
    }
  }

  // Check for CPU win
  if (player.gameboard.sunkShips === 5) {
    console.log('you lose!');
    break;
  }

  // Player turn
  while (true) {
    let result = CPU.gameboard.receiveAttack(...player.sendAttack())
    if (result) {
      console.log(result);
      break;
    }
  }

  // Check for player win
  if (CPU.gameboard.sunkShips === 5) {
    console.log('you win!');
    break;
  }
}
