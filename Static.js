class user{
    static usercount=0;

    constructor(name){
        this.name=name;
        user.usercount++;
    }

    static getCount(){
        console.log(`There are ${user.usercount} users`);
    }

    sayHello(){
        console.log(`Hello ${this.name}`);
    }
}


const user1 = new user("KoKO");
const user2 = new user("MaMa");

user1.sayHello();
user.getCount();