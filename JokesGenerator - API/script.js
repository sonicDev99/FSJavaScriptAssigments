const output = document.querySelector('.joke');
const btn = document.querySelector('.btn');
const getJoke = async () => {
    try {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        const data = await res.json();
        const { joke } = data;
        output.textContent = joke;
    } catch (error) {
        console.error(error);
    }
};
getJoke();
btn.addEventListener('click', getJoke);
