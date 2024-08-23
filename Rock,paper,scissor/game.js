const computer=["rock","paper","scissors"];
let Poutput = document.getElementById("PResult");
let Coutput = document.getElementById("CResult");
let display = document.getElementById("resultDisplay");
let Ppoint=0;
let Cpoint=0;
let playerchoice= document.getElementById("playerChoice").value;

function playGame(playerchoice){
    let computerchoice= computer[Math.floor(Math.random()*3)];
    let result;

    Poutput.innerHTML = "Player chose: " + playerchoice;
    Coutput.innerHTML = "Computer chose: " + computerchoice;

        if(playerchoice===computerchoice){
            result="TIE!";
        }
        else {
            switch(playerchoice){
                case "rock":
                result = (computerchoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

                case "paper":
                result = (computerchoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;

                case "scissors":
                result = (computerchoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            }
        }

        if(result==="TIE!"){
            display.style.color = "yellow";
        }
        else{
            display.style.color = (result==="YOU WIN!")? "green" : "red";
        }
        if(result==="YOU WIN!"){
            Ppoint++;
            document.getElementById("playerP").innerHTML = "Player Point: " + Ppoint;
        }
        else if(result==="YOU LOSE!"){
            Cpoint++;
            document.getElementById("computerP").innerHTML = "Computer Point: " + Cpoint;
        }



display.innerHTML = result;

document.getElementById("restart").addEventListener('click', () => {location.reload()});
    };


    
