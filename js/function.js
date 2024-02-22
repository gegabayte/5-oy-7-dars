const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function getData () {
    let data = [];
    if (localStorage.getItem('users')) {
        data =  JSON.parse(localStorage.getItem('users'))
    }
    return data;
}

function validateRegister(name, surname, age, email, username ,password, repassword){
    if (!name.value) {
        alert('Name kiritilmadi');
        name.focus();
        return false;
    }

    if (name.value.trim().length < 3) {
        alert('Name Notogri kiritildi');
        name.focus();
        return false;
    };

    if (Number(name)) {
        alert('Name raqam bolmaydi');
        name.focus();
        return false;
    }


    if (!surname.value) {
        alert('Surname kiritilmadi');
        surname.focus();
        return false;
    }
    if (surname.value.trim().length < 5) {
        alert('surname Notogri kiritildi');
        surname.focus();
        return false;
    };

    if (Number(surname)) {
        alert('Surname raqam bolmaydi');
        surname.focus();
        return false;
    }


    if (!age.value) {
        alert('Age kiritilmagan');
        age.focus();
        return false
    }

    if (!Number(age.value)) {
        alert('Age son bolishi kerak');
        age.focus();
        return false;
    }

    if (age.value < 0 && age.value > 120) {
        alert('Age ni Togri kiriting');
        age.focus();
        return false;
    }


    if (!email.value) {
        alert('Email kiritilmadi');
        email.focus();
        return false;
    }

    if (validateEmail(email.value)) {
        alert('email ni togri kiriting');
        email.focus();
        return false;
    }


    if (!username.value && username.value.trim().length < 4) {
        alert('Username ni togri kiriting');
        username.focus();
        return false;
    }


    if (password.value.trim().length < 4) {
        alert('Password ni togri kiriting');
        password.focus();
        return false;

    }


    if (!repassword.value) {
        alert('repassword kiritmadingiz');
        repassword.focus();
        return false;
    }

    if (password.value != repassword.value) {
        alert('Password and Repassword mos emas');
        password.focus();
        repassword.value = '';
        return false;
    }


    let users = getData();
    if (users.length) {
        let isExsit = users.some(user => {
            return user.username == username.value
        })
        if (isExsit) {
            alert('Bunday username mavjud');
            return false;
        }
    }

    return true;
}

function validateLogin(username, password){
    if (!username.value && username.value.trim().length < 4) {
        alert('Username ni togri kiriting');
        username.focus();
        return false;
    }


    if (password.value.trim().length < 4) {
        alert('Password ni togri kiriting');
        password.focus();
        return false;

    }


    return true;
}

export {validateRegister, getData, validateLogin}