// //your JS code here. If required.
// let container = document.getElementById('container');

// for (let i = 0; i < 800; i++) {
//     let box = document.createElement('div');
//     box.classList.add('square'); 
//     container.appendChild(box);

//     box.addEventListener('mouseover', () => {
//         let randomColor = getRandomColor();
//         box.style.backgroundColor = randomColor;
//     });

//     box.addEventListener('mouseout', () => {
//         setTimeout(() => {
//             box.style.backgroundColor = "gray";  
//         }, 1000);  
//     });
// }

// function getRandomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

let container = document.querySelector('.container');
let arr = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f']
for (let i = 0; i < 800; i++) {
	let random = "#"
	for(let i=0 ; i<6 ; i++){
		random += arr[Math.floor(Math.random()*16)]
	}
	let square = document.createElement('div');
	square.classList.add('square');
	square.addEventListener('mouseover',()=>{
		square.style.backgroundColor = random;
		square.style.transition = "none";
	})
	square.addEventListener('mouseout',()=>{
		square.style.backgroundColor = "rgb(29, 29, 29)";
		square.style.transition = "background-color 1s ease";
	})
	container.appendChild(square);
}
