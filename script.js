//your JS code here. If required.
let board = document.getElementById("board");

for (let i = 0; i < 800; i++) {
	let box = document.createElement("div");
	box.classList.add("box");
	board.appendChild(box);
}