const input = document.querySelector('.data');
const btn = document.querySelector('#submit');
const qrCodeImg = document.querySelector('img');

const getQRCode = async () => {
    try {
        const userInput = input.value;
        if (!userInput) return;
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput}`;
        qrCodeImg.src = url;
        qrCodeImg.style.display = 'block';
    } catch (error) {
        console.error(error);
    }
};

btn.addEventListener('click', getQRCode);
