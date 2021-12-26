let form = document.getElementById('loginform');
let username = document.getElementById('uname');
let password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    confirm("Username: " + uname.value + "\n" + "Password: " + password.value);
});