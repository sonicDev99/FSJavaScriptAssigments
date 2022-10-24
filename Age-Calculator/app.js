const container = document.querySelector('.container');
const error = container.querySelector('.error');
const input = container.querySelector('#dob');
const ageEl = container.querySelector('.desc');
const monthEl = container.querySelector('#months');
const yearEl = container.querySelector('#years');
const dayEl = container.querySelector('#days');
const welcomeMsg = container.querySelector('.error');

function calcAge() {
    const date = input.value;
    const [year, month, day] = date.split('-');
    const age = 2022 - +year;
    return {
        age,
        day,
        month,
        year,
    };
}
function displayAge() {
    const { age, day, month, year } = calcAge();
    ageEl.textContent = `Your Age is : ${age}`;
    dayEl.textContent = day;
    monthEl.textContent = month;
    yearEl.textContent = year;
    welcomeMsg.classList.remove('error');
}

input.addEventListener('input', displayAge);
