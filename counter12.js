function createCounter(){

    let count=0;

    function increment(){
        count++;
        console.log(`Count increase ${count}`);
    }

    function counting(){
        return count;
    }

    return {increment,counting};
}

const counter1 = createCounter();

counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
console.log(`Counter increment ${counter1.counting()}`);



