import { validateRegister, getData } from "./function.js";
const button = document.getElementById('button');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const username = document.getElementById('Username');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const L = document.querySelectorAll('.form-label')
const form = document.getElementById('form');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

button && button.addEventListener('click', function(e){
    e.preventDefault();
    const isValid = validateRegister(name, surname, age, email, username, password, repassword);
    
    if (isValid) {
        const user = {
            name: name.value,
            surname: surname.value,
            age: age.value,
            email: email.value,
            username: username.value,
            password: password.value,
        }
        let users = getData();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        form.reset();
        let index = window.location.href.search('pages');
        let beseUrl = window.location.href.substring(0, index)
        window.location.assign(`${beseUrl}pages/login.html`);
    }
})

sun && sun.addEventListener('click', function() {
    sun.style.cursor = 'pointer'
    form.style.backgroundColor = 'white'
})

moon && moon.addEventListener('click', function() {
    sun.style.cursor = 'pointer'
    form.style.backgroundColor = 'black'
})

