let area;
let width;
let height;

width = window.prompt("Enter a width: ");
height = window.prompt("Enter a height: ");

area = getArea(width, height);

console.log("Area is " , area);

function getArea(width, height) {
    let result = width * height;
    return result;
}