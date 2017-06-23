module.exports = class Character {
    constructor(id, name, x, y){
        if( new.target === Character){
            throw new Error("Character class can't be instantiated");
        }
        
        this.id = id;
        this.name = name;
        this.x = x || Math.floor( Math.random() * 10);
        this.y = y || Math.floor( Math.random() * 10);
        this.dx = 1;
        this.dy = 0;
    }

    get position(){
        return {
            x: this.x,
            y: this.y
        }
    }

    move(){
        this.x += this.dx;
        this.y += this.dy;
        if(this.x < 0) this.x = 0;
        if(this.x > 9) this.x = 9;
        if(this.y < 0) this.y = 0;
        if(this.y > 9) this.y = 9;
    }

    logPosition(){
        console.log(this.name, this.position);
    }

    collidesWith(character){
        return character.position.x === this.x &&
               character.position.y === this.y;
    }

}