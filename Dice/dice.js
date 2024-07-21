function rollDice(){
    const numDice = document.getElementById('numDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImage = document.getElementById('diceImage');
    let sum=0;
    const values = [];
    const images = [];

    for(let i = 0; i < numDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="${value}.dice-six-faces-one.png" alt="Dice ${value}">`);
        sum += value;
    }

    diceResult.textContent = values.join(', ');
    diceImage.innerHTML = images.join('');
    document.getElementById('SumResult').textContent = sum;
}
