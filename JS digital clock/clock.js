function updateClock(){
        const now=new Date();
        const hour=now.getHours();
        const minute=now.getMinutes();
        const second=now.getSeconds();
        const timeString= `${hour}:${minute}:${second}`
        document.getElementById('clock').textContent=timeString;

}

setInterval(updateClock, 1000); //setInterval can call the function by loop
updateClock();