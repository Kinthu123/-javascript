class Rectangle{

    constructor(length, width){
        this.width = width;
        this.length = length;
    }

    set width(NewWidth){
        if(NewWidth > 0){
            this._width = NewWidth;
        }
        else{
           console.error("Width must be a positive number");
        }
    }
    set length(NewLength){
        if(NewLength > 0){
            this._length = NewLength;
        }
        else{
           console.error("Length must be a positive number");
        }
    }
    get width(){
        return this._width;
    }
    get length(){
        return this._length;
    }
    get area(){
        return this._width * this._length;
    }
}

const rectangle = new Rectangle(2, 3);


console.log(rectangle.width);
console.log(rectangle.length);
console.log(rectangle.area);

