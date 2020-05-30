var numsquares = 6;
var colors = generatecolors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
colordisplay.textContent = pickedcolor;
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function() {
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numsquares = 3;
    colors = generatecolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
hardbtn.addEventListener("click", function() {
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numsquares = 6;
    colors = generatecolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = colors[i];


        squares[i].style.display = "block";
    }

});



resetbutton.addEventListener("click", function() {
    colors = generatecolors(numsquares);
    pickedcolor = pickcolor();
    this.textContent = "NEW COLORS"
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messagedisplay.textContent = "";


});







for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function() {
        var clickedcolor = this.style.backgroundColor;
        if (clickedcolor === pickedcolor) {
            messagedisplay.textContent = "Correct!";
            changecolors(clickedcolor);
            h1.style.backgroundColor = clickedcolor;
            resetbutton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messagedisplay.textContent = "Try Again";
        }
    });
}

function changecolors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickcolor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generatecolors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomcolor());
    }

    return arr;
}

function randomcolor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}