//easy way

// let username = window.prompt("What is your name?");
// console.log(username);

//hard way

let username;



document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;  //Important things
}
