class Rectangle{
    constructor(_width, _height,_color){
        this.width = _width;
        this.height = _height;
        this.color = _color;
        console.log("A new rectangle Created.");
    }

    getArea(){
        return this.width * this.height;
    }

    aboutMe(){
        return `I am a rectangle of ${this.width} x ${this.height} and color ${this.color}`;
    }


}

const newRect = new Rectangle(10,5,"red");
console.log(newRect.getArea());
console.log(newRect.aboutMe());

const newRect2 = new Rectangle(20,10,"blue");
console.log(newRect2.getArea());
console.log(newRect2.aboutMe());