function calculate() {
    const result = document.getElementById("total");
    const Pamount = document.getElementById("principal");
    const Irate = document.getElementById("Intrestrate");
    const Year = document.getElementById("Years");

    let P = Number(Pamount.value);
    let R = Number(Irate.value) / 100;
    let Y = Number(Year.value);
    let total = P * Math.pow((1 + R / 1), 1 * Y);

    if(P<0 || isNaN(P)){
        P=0;
        P.value = 0;
    }
    if(R<0 || isNaN(R)){
       R=0;
       R.value = 0;
    }

    if(Y<0 || isNaN(Y)){
       Y=0;
       Y.value = 0;
    }


    result.textContent = total.toLocaleString(undefined, { style: "currency", currency: "USD" });
}
