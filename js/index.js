import { getData } from "./function.js";

const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const logout = document.getElementById('logout');

console.log(logout);



document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault();
    let users = getData();
    let activeUser = localStorage.getItem(`${beseUrl}/pages/login.html`);

    if (activeUser) {
        let user = users.find(el => {
            return el.username == activeUser;
        })
        if (user) {
            name.innerHTML = user.name;
            surname.innerHTML = surname.name;
            age.innerHTML = age.name;
            email.innerHTML = email.name;
            username.innerHTML = username.name;
            password.innerHTML = password.name;
        } else {
            window.location.assign(`${beseUrl}/pages/login.html`);
        }
    } else {
        // window.location.assign(`${beseUrl}/pages/login.html`);
    }


})


logout && logout.addEventListener('click', function() {
    window.location.assign(`${beseUrl}/pages/login.html`);
})