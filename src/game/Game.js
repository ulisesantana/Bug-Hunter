const PlayerCharacter = require('./PlayerCharacter');
const NonPlayerCharacter = require('./NonPlayerCharacter');
const EventEmitter = require('events');
const render = require('./render');

console.reset = function () {
  return process.stdout.write('\033c');
}

module.exports = class Game {
    constructor(heroName, numberOfBugs){
        this.player = new PlayerCharacter(1, heroName);
        this.npcs = [];
        for(let i = 2; i < numberOfBugs+2; i++){
            this.npcs.push(new NonPlayerCharacter(i, `Bug_${i}`));
        }
        this.gameLife = new EventEmitter();
        this.render = render;
    }
    
    changeNpcDirections(){
        this.npcs.forEach( npc => npc.faceRandom())
    }

    moveCharacters(){
        this.player.move();
        this.npcs.forEach( npc => npc.move() );
    }

    logPositions(){
        let allCharacters = JSON.parse(JSON.stringify(this.npcs)); //Deep Clone
        allCharacters.push(this.player);
        this.render(allCharacters);
        this.player.logPosition();
        this.npcs.forEach(npc => npc.logPosition());
    }

    processCollisions(){
        let len = this.npcs.length;
        this.npcs = this.npcs.filter(npc => !npc.collidesWith(this.player));
        this.player.increaseScore(len - this.npcs.length);
    }

    start(){
        console.reset()
        let interval = setInterval( () => {
            console.reset()
            this.changeNpcDirections();
            this.moveCharacters();
            this.logPositions();
            this.processCollisions();
            if (this.npcs.length <= 0) {
                console.log('You killed all the bugs!! You win!!');
                clearInterval(interval);
                this.gameLife.emit('game-over');
            }
        }, 5000);
    }
}