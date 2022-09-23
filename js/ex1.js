class Square {
    constructor(side) {
        this.side = side;
    }
    
    perimiter() {
        return this.side * 4;
    }

    area() {
        return this.side * this.side;
    }

    diagonal() {
        return Math.sqrt(2) * this.side;
    }

    describe() {
        return `Square with side ${this.side} has perimiter ${this.perimiter()}, area ${this.area()}, and diagonal ${this.diagonal().toFixed(3)}`;
    }
}

console.log(new Square(2).describe());
console.log(new Square(3).describe());
console.log(new Square(4).describe());