const login = document.querySelector('.login-form');

login.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені!!!');
    }
    console.log({
        Email: email.value,
        Password: password.value,
    });
    event.currentTarget.reset();
}

