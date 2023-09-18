let date = document.getElementById('inputDate')
let car = document.getElementById('inputCar')
let company = document.getElementById('inputCompany')
let guests = document.getElementById('inputGuests')
        
const submitButton = document.getElementById('submitButton')
const result = document.getElementById('resultBox')
const copyButton = document.getElementById('copyButton')
const copyAnswerBox = document.getElementById('copyAnswerBox')
const copyAnswerButton = document.getElementById('copyAnswerButton')
const contactsBox = document.getElementById('contactsBox')

// Кнопки с выбором - пропуск, отбивки, контакты и маршрутизация
const passSelectButton = document.getElementById('passSelectBtn')
const answersSelectButton = document.getElementById('answersSelectBtn')
const contactsSelectButton = document.getElementById('contactsSelectBtn')
const routeTTSelectButton = document.getElementById('routeTTSelectBtn')
const goBackBox = document.getElementById('goBackBox')
const goBackBox2 = document.getElementById('goBackBox2')

// Кнопки с выбором - закрыть, открыть и т.п.
const createdTTButton = document.getElementById('createdTTBtn')
const moreInfoTTButton = document.getElementById('moreInfoTTBtn')
const solutionTTButton = document.getElementById('solutionTTBtn')
const canIcloseTTButton = document.getElementById('canIcloseTTBtn')
const closedTTButton = document.getElementById('closedTTBtn')

// Константы для темы
const themeButton = document.getElementById('themeButton')
const jsBody = document.getElementById('jsBody')

passSelectButton.onclick = function() {
    document.getElementById('passBox').style = "display: block;"
    document.getElementById('welcomeBox').style = "display:none;"

    goBackBox.innerHTML = 
    `
    <button class="choose_button" id="goBackBtn">НА ГЛАВНУЮ</button>
    `

    const goBackButton = document.getElementById('goBackBtn')
    document.getElementById('goBackBtn').style = "display: flex;"

    goBackButton.onclick = function() {
        document.getElementById('passBox').style = "display: none;"
        document.getElementById('welcomeBox').style = "display: block;"
        document.getElementById('goBackBtn').style = "display: none;"
    }
}

routeTTSelectButton.onclick = function() {
    alert('Упс! Страница ещё в разработке =(')
}

answersSelectButton.onclick = function() {
    document.getElementById('answersBox').style = "display: block;"
    document.getElementById('welcomeBox').style = "display: none;"

    goBackBox2.innerHTML =
    `
    <button class="choose_button" id="goBackBtn2">НА ГЛАВНУЮ</button>
    `

    const goBackButton2 = document.getElementById('goBackBtn2')
    document.getElementById('goBackBtn2').style = "display: flex;"

    createdTTButton.onclick = function() {
        let ticketNumber = document.getElementById('inputTicketNumber')
        let createdTTtext = 'Здравствуйте! Дата-центр O2XYGEN свидетельствует Вам своё уважение и информирует о том, что по Вашему запросу была открыта заявка № ' + ticketNumber.value
        console.log(createdTTtext)
        let createdTTAnswerText = document.getElementById('createdAnswerTextBox')

        createdTTAnswerText.innerHTML =
        `
        <textarea class="text_for_copy2" cols="90" rows="2" id="textForCopyCreatedTT">${createdTTtext}</textarea>
        `

        let createdTTAnswerTextCopy = document.getElementById('textForCopyCreatedTT')
        createdTTAnswerTextCopy.select()
        document.execCommand('copy')
    }

    moreInfoTTButton.onclick = function() {
        let ticketNumber = document.getElementById('inputTicketNumber')
        let moreInfoTTtext = 'Дата-центр O2XYGEN свидетельствует Вам своё уважение и информирует о том, что по заявке № ' + ticketNumber.value + ' необходима дополнительная информация:'
        console.log(moreInfoTTtext)
        let moreInfoTTAnswerText = document.getElementById('createdAnswerTextBox')

        moreInfoTTAnswerText.innerHTML =
        `
        <textarea class="text_for_copy2" cols="90" rows="2" id="textForCopyCreatedTT">${moreInfoTTtext}</textarea>
        `

        let moreInfoTTAnswerTextCopy = document.getElementById('textForCopyCreatedTT')
        moreInfoTTAnswerTextCopy.select()
        document.execCommand('copy')
    }

    solutionTTButton.onclick = function() {
        let ticketNumber = document.getElementById('inputTicketNumber')
        let solutionTTtext = 'Дата-центр O2XYGEN свидетельствует Вам своё уважение и информирует о том, что по заявке № ' + ticketNumber.value + ' появилось решение:'
        console.log(solutionTTtext)
        let solutionTTAnswerText = document.getElementById('createdAnswerTextBox')

        solutionTTAnswerText.innerHTML =
        `
        <textarea class="text_for_copy2" cols="90" rows="2" id="textForCopyCreatedTT">${solutionTTtext}</textarea>
        `

        let solutionTTAnswerTextCopy = document.getElementById('textForCopyCreatedTT')
        solutionTTAnswerTextCopy.select()
        document.execCommand('copy')
    }

    canIcloseTTButton.onclick = function() {
        let ticketNumber = document.getElementById('inputTicketNumber')
        let canIcloseTTtext = 'Здравствуйте! Уточните, пожалуйста: можем ли мы закрыть заявку № ' + ticketNumber.value + ' в случае, если по ней у Вас не осталось больше вопросов?'
        console.log(canIcloseTTtext)
        let canIcloseTTAnswerText = document.getElementById('createdAnswerTextBox')

        canIcloseTTAnswerText.innerHTML =
        `
        <textarea class="text_for_copy2" cols="90" rows="2" id="textForCopyCreatedTT">${canIcloseTTtext}</textarea>
        `

        let canIcloseTTAnswerTextCopy = document.getElementById('textForCopyCreatedTT')
        canIcloseTTAnswerTextCopy.select()
        document.execCommand('copy')
    }

    closedTTButton.onclick = function() {
        let ticketNumber = document.getElementById('inputTicketNumber')
        let closedTTtext = 'Здравствуйте! Дата-центр O2XYGEN свидетельствует Вам своё уважение и информирует о том, что заявка № ' + ticketNumber.value + ' закрыта. Просим Вас не отвечать на данное письмо кроме случая, если по данной заявке у Вас остались невыясненные вопросы. Рады помочь Вам!'
        console.log(closedTTtext)
        let closedTTAnswerText = document.getElementById('createdAnswerTextBox')

        closedTTAnswerText.innerHTML = 
        `
        <textarea class="text_for_copy2" cols="90" rows="3" id="textForCopyCreatedTT">${closedTTtext}</textarea>
        `

        let closedTTAnswerTextCopy = document.getElementById('textForCopyCreatedTT')
        closedTTAnswerTextCopy.select()
        document.execCommand('copy')
    }

    goBackButton2.onclick = function() {
        document.getElementById('answersBox').style = "display: none;"
        document.getElementById('welcomeBox').style = "display: block;"
        document.getElementById('goBackBtn2').style = "display: none;"
    }
}


submitButton.onclick = function() {
    const compared = date.value + ' // ' + company.value + ' // ' + guests.value + ' // ' + car.value
    console.log(compared)

    result.innerHTML = 
    `
    <textarea class="text_for_copy" id="textForCopy">${compared}</textarea>
    `

    let copyText = document.getElementById('textForCopy')
    copyText.select()
    document.execCommand('copy')
    document.getElementById('copyAnswerBox').style = "display: flex;"
    alert('Попуск скопирован! Теперь просто вставь его в таск! :3')
}

copyAnswerButton.onclick = function() {

}

contactsSelectButton.onclick = function() {
    document.getElementById('contactsBox').style = "display: block;"
    let goBackBox3 = document.getElementById('goBackBox3')
    goBackBox3.innerHTML = 
    `
    <button class="choose_button" id="goBackBtn3">НА ГЛАВНУЮ</button>
    `
    document.getElementById('goBackBox3').style = "display: flex;"
    document.getElementById('welcomeBox').style = "display: none;"
    const goBackButton3 = document.getElementById('goBackBtn3')

    goBackButton3.onclick = function() {
        document.getElementById('welcomeBox').style = "display: block;"
        document.getElementById('goBackBox').style = "display: none;"
        document.getElementById('contactsBox').style = "display: none;"
    }

}

let now = new Date()
console.log(now)