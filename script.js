//your JS code here. If required.
let board = document.querySelector(".container");

for (let i = 0; i < 800; i++) {
	let square = document.createElement("div");
	square.classList.add("square");
	board.appendChild(square);
}