class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    getArea(){
        return this.width * this.height;
    }

    // This is a getter
    get area(){
        return this.width * this.height;
    }
}

const newSquare = new Square(15);
console.log(newSquare.getArea()); // This is a method
console.log(newSquare.area);  /* It is a property that is a function.
                                It is called like a property, not a method.
                                area() -> No
                                area -> Yes */
