let x;
let y;
let z;

document.getElementById("Btn").onclick = function() {
    x=Math.floor(Math.random()*7);
    y=Math.floor(Math.random()*7);
    z=Math.floor(Math.random()*7);

    document.getElementById("displayX").innerHTML= x;
    document.getElementById("displayY").innerHTML= y;
    document.getElementById("displayZ").innerHTML= z;

}