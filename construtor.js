function car(make, model, year , color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`Driving ${this.model}`)}
}


const car1 = new car("Ford","Mustage","2004","Red");

car1.drive();