let userAdministrator = {
    userName: "ipopov",
    userPassword: "ipopovpass",
    firstName: "Иван",
    lastName: "Попов",
    userProfileType: "admin"
}

localStorage.setItem('LSKeyUserAdmin', userAdministrator)

let userSB = {
    userName: "sbut",
    userPassword: "sbutpass",
    firstName: "Сергей",
    lastName: "Бут",
    userProfileType: "user"
}

let users = [userAdministrator, userSB]

console.log(users)