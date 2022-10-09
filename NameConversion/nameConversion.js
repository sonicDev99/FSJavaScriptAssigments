const inputValue = document.getElementById('text');
const btn = document.getElementById('convert-btn');
const allCases = document.querySelectorAll('.case_div');

const nameConverter = () => {
    let currName;
    const nameArray = inputValue.value
        .split(' ')
        .map((name) => name.toLowerCase());

    allCases.forEach((case_, i) => {
        if (i === 0) {
            currName = nameArray
                .map((name, i) => {
                    if (i !== 0) {
                        return name[0].toUpperCase() + name.slice(1);
                    } else {
                        return name;
                    }
                })
                .join('');
            case_.lastElementChild.textContent = currName;
        } else if (i === 1) {
            currName = nameArray
                .map((name) => {
                    return name[0].toUpperCase() + name.slice(1);
                })
                .join('');
            case_.lastElementChild.textContent = currName;
        } else if (i === 2) {
            currName = nameArray.join('_');
            case_.lastElementChild.textContent = currName;
        } else if (i === 3) {
            currName = nameArray
                .map((name) => {
                    return name.toUpperCase();
                })
                .join('_');
            case_.lastElementChild.textContent = currName;
        } else if (i === 4) {
            currName = nameArray.join('-');
            case_.lastElementChild.textContent = currName;
        } else if (i === 5) {
            currName = nameArray
                .map((name) => {
                    return name.toUpperCase();
                })
                .join('-');
            case_.lastElementChild.textContent = currName;
        } else {
            console.log('Please input string value ' + currName);
        }
    });
};

btn.addEventListener('click', nameConverter);
