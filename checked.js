document.getElementById("Sbutton").onclick = function() {
    const button = document.getElementById("button");
    const Visa = document.getElementById("Visa");
    const Master = document.getElementById("Master");
    const Paypal = document.getElementById("Paypal");

    if (button.checked){
        console.log("You are sub");
    }
    else{
        console.log("You are not sub");
    }

    if(Visa.checked){
        console.log("You are paying with Visa")
    }
    else if(Master.checked){
        console.log("You are paying with MasterCard")
    }
    else if(Paypal.checked){
        console.log("You are paying with PayPal")
    }
    else{
        console.log("You haven't selected any payment method")
    }


}