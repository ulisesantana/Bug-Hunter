const Table = require('cli-table');
const settings = require('./../settings');
const NonPlayerCharacter = require('./NonPlayerCharacter');

module.exports = (characters) => {
  for( character of characters){
    console.log(character.score);
  }
  let map = new Table();
  // for (var index = 0; index < settings.sizeOfMap; index++) {
  //   var element = array[index];

  // }
};