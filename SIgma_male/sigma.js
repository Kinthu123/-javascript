const quotes = [
    "In the world of sheep, be a lone wolf.",
    "Silence speaks louder than words.",
    "Walk your path, even if you walk alone.",
    "Strength lies in solitude.",
    "True freedom is not in conforming, but in being yourself.",
    "The journey of a Sigma male is a journey of self-discovery.",
    "Independence is the ultimate power.",
    "Success is the best revenge."
];



function generateSigmaQuote(){
    const RandomQuote = Math.floor(Math.random() *quotes.length);
    const quote = quotes[RandomQuote];
    document.getElementById("sigmaQuote").innerHTML = quote;
};