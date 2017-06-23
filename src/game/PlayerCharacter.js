const Character = require('./Character');

module.exports = class PlayerCharacter extends Character{
    constructor(id, name, x, y){
        super(id, name, x, y);
        this.score = 0;
    }

    increaseScore(points){
        this.score += points;
        if(points > 0) console.log(`You have killed ${points} bug${points > 1 ? s : ''}!!`);
    }

    faceUp(){
        this.dx = 0;
        this.dy = -1;
    }

    faceDown(){
        this.dx = 0;
        this.dy = 1;
    }

    faceLeft(){
        this.dx = -1;
        this.dy = 0;
    }

    faceRight(){
        this.dx = 1;
        this.dy = 0;
    }

}