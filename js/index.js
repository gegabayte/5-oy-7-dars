import { getData } from "./function.js";

const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const logout = document.getElementById('logout');


document.addEventListener('DOMContentLoaded', function (e) {

    e.preventDefault();
    let fullUrl = window.location.href;
    let index = fullUrl.search('pages');
    let beseUrl = fullUrl.substring(0, index);
    let users = getData();
    let activeUser = localStorage.getItem(`${beseUrl}/pages/login.html`);

    if (activeUser) {
        let user = users.find(el => {
            return el.username == activeUser;
        })
        if (user) {
            name.innerHTML = user;
            surname.innerHTML = surname;
            age.innerHTML = age;
            email.innerHTML = email;
            username.innerHTML = username;
            password.innerHTML = password;
        } else {
            window.location.assign(`${beseUrl}/pages/login.html`);
        }
    } else {
        // window.location.assign(`${beseUrl}/pages/register.html`);
    }


})


logout && logout.addEventListener('click', function() {
    let fullUrl = window.location.href;
    let index = fullUrl.search('pages');
    let beseUrl = fullUrl.substring(0, index);
    window.location.assign(`${beseUrl}/pages/register.html`);
})