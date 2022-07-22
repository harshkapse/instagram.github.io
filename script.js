const emailField = document.querySelector('#email')
const passwordField = document.querySelector('#password')
const loginBtn = document.querySelector('#login')
const show = document.querySelector('#show')

let emailTest = false
let passwordTest = false
let showing = false

emailField.addEventListener('input', e => {
    if (e.target.value.length > 0)
        emailTest = true
    else
        emailTest = false

    if (emailTest && passwordTest)
        loginBtn.classList.add('btn-active');
    else
        loginBtn.classList.remove('btn-active');
})

passwordField.addEventListener('input', e => {
    if (e.target.value.length >= 6)
        passwordTest = true
    else
        passwordTest = false

    if (emailTest && passwordTest)
        loginBtn.classList.add('btn-active');
    else
        loginBtn.classList.remove('btn-active');

    if (e.target.value.length > 0) {
        show.style.display = 'block'
    }
    else {
        show.style.display = ''
    }

})

show.addEventListener('click', e => {
    if (!showing) {
        e.target.innerHTML = 'Hide';
        passwordField.setAttribute('type', 'text')
        showing = true
    }
    else {
        e.target.innerHTML = 'Show';
        passwordField.setAttribute('type', 'password')
        showing = false
    }
})