const Game = require('./Game');
const readline = require('readline');

const game = new Game('Bug Hunter', 5);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
  switch(input){
    case 'up': 
      game.player.faceUp();
      break;
    case 'down': 
      game.player.faceDown();
      break;
    case 'left': 
      game.player.faceLeft();
      break;
    case 'right': 
      game.player.faceRight();
      break;
  }
});

game.gameLife.on('game-over', () => rl.close());

game.start();