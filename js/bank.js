document.getElementById('login-btn').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    // check email and password
    if (userEmail == 'mahadi2509@gmail.com' && userPassword == '25092001') {
        window.location.href = 'account.html';
    }
    else {
        const invalid = document.getElementById('invalid');
        invalid.innerText = 'invalid'
        invalid.style.color = 'red'
    }
})