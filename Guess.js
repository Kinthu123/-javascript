const answer= Math.floor((Math.random()* 11));

let guesses = 0;

document.getElementById("sumitField").onclick = function() {
    let guess = document.getElementById("guessField").value
    guesses +=1;

    if(guess == answer) {
        alert("Congratulations! You guessed the number correctly. It took you " + guesses + " guesses.");
    }
    else if(guess < answer) {
        alert("Too low! Try again.");
    }
    else {
        alert("Too high! Try again.");
    }

};
