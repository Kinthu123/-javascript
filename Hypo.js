let x;
let y;
let z;

document.getElementById("submitButton").onclick = function() {
    x= document.getElementById("aTextBox").value;
    x=Number(x);

    y=document.getElementById("bTextBox").value;

    y=Number(y);

    z= Math.sqrt(Math.pow(x,2) + Math.pow(y,2));

    document.getElementById("clabel").innerHTML=" Size Z"+z;

}