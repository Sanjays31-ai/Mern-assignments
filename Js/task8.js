function validateForm() {
    let isValid = true;

    document.querySelectorAll('.validation').forEach(el => el.innerText = '');

    const fname = document.getElementById('fname').value;
    if (fname === '') {
        document.getElementById('fnameError').innerText = 'POOR';
        isValid = false;
    }

    const lname = document.getElementById('lname').value;
    if (lname === '') {
        document.getElementById('lnameError').innerText = 'POOR';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'POOR';
        isValid = false;
    }

    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'POOR';
        isValid = false;
    }
    const repassword = document.getElementById('repassword').value;
    if (repassword.length < 6) {
        document.getElementById('repasswordError').innerText = 'POOR OR MISMATCH';
        isValid = false;
    }

    if(repassword !== password) {
        document.getElementById('repasswordError').innerText = 'POOR OR MISMATCH';
        isValid = false;
    }

    const age = document.getElementById('age').value;
    if (age === '' || age < 18 || age > 100) {
        document.getElementById('ageError').innerText = 'POOR';
        isValid = false;
    }

    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = 'POOR';
        isValid = false;
    }

    const address = document.getElementById('address').value;
    if (address === '') {
        document.getElementById('addressError').innerText = 'POOR';
        isValid = false;
    }

    const state = document.getElementById('state').value;
    if (state === '') {
        document.getElementById('stateError').innerText = 'POOR';
        isValid = false;
    }

    return isValid;
}