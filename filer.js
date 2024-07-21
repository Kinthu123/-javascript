let numbers = [1,2,3,4,5,6,7];
let EvenNumber= numbers.filter(isEven);
let OddNumbeer = numbers.filter(isOdd);

console.log(OddNumbeer);
console.log(EvenNumber);

function isEven(elements) {
    return elements % 2==0;
}

function isOdd(elements) {
    return elements % 2!=0;
}