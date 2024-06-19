// colors.js
function changecolor() {

    var target = document.getElementById("target");
    
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    target.style.backgroundColor = randomColor;
}
