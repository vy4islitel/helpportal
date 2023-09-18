let date = document.getElementById('inputDate')
let car = document.getElementById('inputCar')
let company = document.getElementById('inputCompany')
let guests = document.getElementById('inputGuests')
        
const submitButton = document.getElementById('submitButton')
const result = document.getElementById('resultBox')
const copyButton = document.getElementById('copyButton')
const copyAnswerBox = document.getElementById('copyAnswerBox')
const copyAnswerButton = document.getElementById('copyAnswerButton')

// Константы для темы //
const themeButton = document.getElementById('themeButton')
const jsBody = document.getElementById('jsBody')

themeButton.onclick = function themeChanger() {
    // document.getElementById('jsBody').style = "background: rgb(255,255,255);"
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

let now = new Date()
console.log(now)