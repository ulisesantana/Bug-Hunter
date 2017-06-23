const PlayerCharacter = require('./PlayerCharacter');
const NonPlayerCharacter = require('./NonPlayerCharacter');
const EventEmitter = require('events');

module.exports = class Game {
    constructor(playerName, numberOfNpc){
        this.player = new PlayerCharacter(1, playerName);
        this.npcs = [];
        for(let i = 2; i < numberOfNpc+2; i++){
            this.npcs.push(new NonPlayerCharacter(i, `Bug_${i}`));
        }
        this.gameLife = new EventEmitter();
    }
    
    changeNpcDirections(){
        this.npcs.forEach( npc => npc.faceRandom())
    }

    moveCharacters(){
        this.player.move();
        this.npcs.forEach( npc => npc.move() );
    }

    logPositions(){
        this.player.logPosition();
        this.npcs.forEach(npc => npc.logPosition());
    }

    processCollisions(){
        let len = this.npcs.length;
        this.npcs = this.npcs.filter(npc => !npc.collidesWith(this.player));
        this.player.increaseScore(len - this.npcs.length);
    }

    start(){
        let interval = setInterval( () => {
            console.log('Turn starts')
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