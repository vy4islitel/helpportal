let inputUserName = document.getElementById('inputUserName')
let inputUserPassword = document.getElementById('inputUserPassword')

const loginButton = document.getElementById('loginButton')

loginButton.onclick = function login() {
    console.log("Введенный логин:", inputUserName.value, "Введенный пароль:", inputUserPassword.value)

    if (inputUserName.value === users[0].userName, inputUserPassword.value === users[0].userPassword)
        alert('Добро пожаловать, ' + users[0].firstName + '!'), document.location.href = 'index.html', localStorage.getItem('LSKeyUserAdmin', userAdministrator)
    else if (inputUserName.value === users[1].userName, inputUserPassword.value === users[1].userPassword)
        alert('Добро пожаловать, ' + users[1].firstName + '!')
    else (inputUserName.value === undefined, inputUserPassword.value === undefined)
    return
}