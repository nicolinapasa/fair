function userExists(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
}

function displayError(inputElement) {
    inputElement.classList.add('error');
}

function removeError(inputElement) {
    inputElement.classList.remove('error');
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (!userExists(email) || users.find(user => user.email === email).password !== password) {
        displayError(document.getElementById('email'));
        displayError(document.getElementById('password'));
    } else {
        removeError(document.getElementById('email'));
        removeError(document.getElementById('password'));
        localStorage.setItem('login' ,'true');
        localStorage.setItem('curr_email', document.getElementById('email').value);
        localStorage.setItem('curr_name', users.find(user => user.email === document.getElementById('email').value).name);
        localStorage.setItem('curr_surname', users.find(user => user.email === document.getElementById('email').value).surname)
        location.href = 'index-en.html';
    }
}

function register() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('emailReg').value;
    const password = document.getElementById('passwordReg').value;

    if (userExists(email)) {
        displayError(document.getElementById('emailReg'));
        return;
    }

    removeError(document.getElementById('emailReg'));
    const user = {
        name: name,
        surname: surname,
        email: email,
        password: password
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    location.href = 'login-en.html';
}
