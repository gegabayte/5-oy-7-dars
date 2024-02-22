import { validateLogin, getData } from "./function.js";

const button = document.getElementById('button');
const username = document.getElementById('Username');
const password = document.getElementById('password');
const form = document.getElementById('form');
const error = document.getElementById('error');


button && button.addEventListener('click', function (e) {
    e.preventDefault();
    const isValid = validateLogin(username, password);

    if (isValid) {
        let users = getData();
        let user = users.find((el) => {
            return el.username == username.value && el.password == password.value
        })
        if (user?.name) {
            error.classList = 'd-none texr-danger';
            let fullUrl = window.location.href;
            let index = fullUrl.search('pages');
            let beseUrl = fullUrl.substring(0, index);

            localStorage.setItem('activeUser', username.value);
            window.location.assign(`${beseUrl}/index.html`)

        } else {
            error.classList = 'd-block text-danger';
            error.innerHTML = 'Parol yoki Username notogri kiritildi';
        }
    }
})

