console.log("connected!");

/*
var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
];
*/

///////////////////////////
// VARIABLE DECLARATIONS //
///////////////////////////
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");

var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

///////////////
// EASY MODE //
///////////////
easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);

	for (var i = 0; i < squares.length; i++) {
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}

	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 3; i < 6; i++) {
		squares[i].style.display = "none";
	}
});

///////////////
// HARD MODE //
///////////////
hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);

	for (var i = 0; i < squares.length; i++) {
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}

	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 3; i < 6; i++) {
		squares[i].style.display = "block";
	}
});

///////////
// RESET //
///////////
reset.addEventListener("click", function() {
	// console.log("reset game!");
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "NEW GAME";
	messageDisplay.textContent = "";

});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function() {
		console.log("clicked a square!");

	// grab color of clicked square
	var clickedColor = this.style.backgroundColor;

	// compare color to pickedColor
	if(clickedColor === pickedColor) {
		console.log("correct!");
		messageDisplay.textContent = "Correct!";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		reset.textContent = "PLAY AGAIN?"
	}
	else {
		console.log("incorrect!");
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try again!";
	}
	});
}


/////////////
// HELPERS //
/////////////
function changeColors(color) {
	// change each color to match given color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function genRandomColor() {
	return Math.floor(Math.random()*256);
}

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		// get random color nad push into arr
		arr.push("rgb(" + genRandomColor() + ", " + genRandomColor() + ", " + genRandomColor() + ")");
		console.log(arr);
	}
	return arr;
}
