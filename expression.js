const number=[1,2,3,4,5,6];

const cubes= number.map(function(element){
    return Math.pow(element,2);
})

console.log(cubes);