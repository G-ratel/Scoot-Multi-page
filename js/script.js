var tactive = document.getElementById("tactive");
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

// Open modal when the user clicks the button 
btn.onclick = function() {
    tactive.style.display = "block";
    btn.style.display = "none";
    btn2.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == tactive) {
        tactive.style.display = "none";
        btn2.style.display = "none";
        btn3.style.display = "block";
    }
}