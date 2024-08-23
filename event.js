const myBox= document.getElementById("myBox");

myBox.addEventListener("click", function() {
    this.style.backgroundColor = "red";
});

myBox.addEventListener("mouseover", function() {
    this.style.backgroundColor = "purple";
});

myBox.addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightgreen";
});