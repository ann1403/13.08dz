document.querySelector('.bu1').addEventListener('click', (event) => {
    const xhr = new XMLHttpRequest();
    const car = {
        model: document.querySelector('.model').value,
        price: document.querySelector('.price').value,
        photo: document.querySelector('.photo').value,
    };

    xhr.open('POST', '/cars/add', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`car=${JSON.stringify(car)}`);
});