function calculate(){
    const result= document.getElementById("total");
    const Weight= document.getElementById("weight");
    const Height= document.getElementById("height");

    let W= Number(Weight.value); 
    let H= Number(Height.value); 
    let bmi = W/Math.pow(H/ 100, 2);

    if(isNaN(W) || isNaN(H) || W<=0 || H<=0){
        result.textContent ="invalid input";
        return;
    }

    if (bmi < 18.5) {
        result.textContent ="Underweight";
    } 
    else if (bmi >= 18.5 && bmi < 25) {
        result.textContent ="Normal Weight";
    } 
    else if (bmi >= 25 && bmi < 30) {
        result.textContent ="Overweight";
    } 
    else {
        result.textContent ="Obese";
    }
}