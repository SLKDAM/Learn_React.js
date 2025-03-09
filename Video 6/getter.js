class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }

    getArea(){
        console.log(this.width, this.height);
        return this.width * this.height;
    }

    // This is a getter
    get area(){
        return this.width * this.height;
    }

    //This is setter
    set area(value){
        this.width = Math.sqrt(value);
        this.height = this.width;
    }
}

const newSquare = new Square(15);
console.log(newSquare.getArea()); // This is a method
console.log(newSquare.area);  /* It is a property that is a function.
                                It is called like a property, not a method.
                                area() -> No
                                area -> Yes */

//setter                                
newSquare.area = 400;
console.log(newSquare.getArea());


