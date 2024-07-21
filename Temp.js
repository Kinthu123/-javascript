document.getElementById("Click").onclick = function(){



let temp;


if  (document.getElementById("C").checked){ 
    temp = document.getElementById("input").value;
    temp =Number(temp);
    temp = Celcius(temp);
    document.getElementById("Show").innerHTML = temp + " C";

}
else if (document.getElementById("F").checked){ 
    temp = document.getElementById("input").value;
    temp =Number(temp);
    temp = Fahrenheit(temp);
    document.getElementById("Show").innerHTML = temp + " F";

}
else {
    document.getElementById("Show").innerHTML = "Select a unit";
 
}
}


function Celcius(temp){
    return (temp - 32) * (5/9);
    }

function Fahrenheit(temp){
    return (temp * 9/5) + 32;
    }