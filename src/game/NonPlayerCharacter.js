const Character = require('./Character');

module.exports = class NonPlayerCharacter extends Character{
    constructor(id, name){
        super(id, name);
    }

    faceRandom(){
        let dir = Math.floor( Math.random() * 4);
        this.dx = [0, 0, -1, 1][dir];
        this.dx = [-1, 1, 0, 0][dir];
    }
}