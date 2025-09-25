//your JS code here. If required.
let container = document.getElementById('container');

for (let i = 0; i < 800; i++) {
    let box = document.createElement('div');
    box.classList.add('square'); 
    container.appendChild(box);

    box.addEventListener('mouseover', () => {
        let randomColor = getRandomColor();
        box.style.backgroundColor = randomColor;
    });

    box.addEventListener('mouseout', () => {
        setTimeout(() => {
            box.style.backgroundColor = "gray";  
        }, 1000);  
    });
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

