const input = document.querySelector('#binary');
const output = document.querySelector('.result');
const btn = document.querySelector('.btn');

const convertToDecimal = (e) => {
    e.preventDefault();
    const binary = input.value;
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
        decimal += +binary.at(-(i + 1)) * 2 ** i;
    }
    output.textContent = `Decimal Number : ${decimal}`;
};

btn.addEventListener('click', convertToDecimal);
