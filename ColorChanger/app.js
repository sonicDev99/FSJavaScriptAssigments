const btn = document.getElementById('button');
const canvas = document.getElementById('canvas');

const bgColorChanger = () => {
    const strChars = '0123456789ABCDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        randomColor += strChars[Math.floor(Math.random() * 15) + 1];
    }
    canvas.style.backgroundColor = randomColor;
};

btn.onclick = bgColorChanger;
