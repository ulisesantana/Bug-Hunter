const Table = require('cli-table');
const settings = require('./../settings');

module.exports = (characters) => {
  let map = new Table();
  for (let y = 0; y < settings.sizeOfMap; y++) {
    let column = [];
    for (let x = 0; x < settings.sizeOfMap; x++) {
      let cell = 0;
      for (let character of characters) {
        if (character.x == x && character.y == y) {
          if (character.score !== undefined && cell > 0) {
            cell += ' + H';
          } else if (character.score !== undefined && cell < 1) {
            cell = 'H';
          } else {
            cell++;
          }
        }
      }
      column.push(cell);
    }
    map.push(column);
  }
  return console.log(map.toString());
};