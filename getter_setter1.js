class person{
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    set name(Fname) {
        if (typeof Fname === 'string' && Fname.length>0){
            this._name = Fname;
        }
        else{
            console.error('Fanme is wrong');
        }
    }

    set age(Fage) {
        if (typeof Fage === 'number' && Fage>=0){
            this._age = Fage;
        }
        else{
            console.error('Fage is wrong');
        }
    }

    set address(Faddress) {
        if (typeof Faddress === 'string' && Faddress.length>0){
            this._address = Faddress;
        }
        else{
            console.error('Faddress is wrong');
        }
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
    get address() {
        return this._address;
    }

    

    
}



const person1= new person("Ruka", 20 , "Yangon");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);