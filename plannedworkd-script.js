let selectService = document.getElementById('selectService')

const boxVOLS = document.getElementById('VOLS')
const boxLINK = document.getElementById('LINK')
const boxINTERNET = document.getElementById('INTERNET')

selectService.onchange = function () {
    let serviceOption = selectService.value
    console.log(serviceOption)

    if (serviceOption === 'ВОЛС')
        document.getElementById('LINK').style = 'display: none;', document.getElementById('INTERNET').style = 'display: none;', document.getElementById('VOLS').style = 'display: block;', function funcVOLS() {
            let VOLSa
            let VOLSb

            let inputVOLSa = document.getElementById('inputVOLSa')
            let inputVOLSb = document.getElementById('inputVOLSb')

            VOLSa = 'Адрес точки А:  ' + inputVOLSa.value + '    '
            VOLSb = 'Адрес точки Б:  ' + inputVOLSb.value

            console.log(VOLSa, VOLSb)
        }
    else if (serviceOption === 'Канал Связи')
        document.getElementById('LINK').style = 'display: block;', document.getElementById('INTERNET').style = 'display: none;', document.getElementById('VOLS').style = 'display: none;', function () {
            let LINKa
            let LINKb

            let inputLINKa = document.getElementById('inputLINKa')
            let inputLINKb = document.getElementById('inputLINKb')

            LINKa = 'Адрес точки А:  ' + inputLINKa.value + '    '
            LINKb = 'Адрес точки Б:  ' + inputLINKb.value + '    '

            console.log(LINKa, LINKb)
        }
    else if (serviceOption === 'Интернет')
        document.getElementById('LINK').style = 'display: none;', document.getElementById('INTERNET').style = 'display: none;', document.getElementById('VOLS').style = 'display: none;', function funcInternet() {
            let INTERNET

            let inputINTERNET = document.getElementById('inputINTERNET')

            INTERNET = 'Наименование договора:  ' + inputINTERNET.value

            console.log(INTERNET)
        }, alert('С Интернетом пока всё туго - в разработке :3')
    else if (serviceOption === 'Выбрать...')
        document.getElementById('LINK').style = 'display: none;', document.getElementById('INTERNET').style = 'display: none;', document.getElementById('VOLS').style = 'display: none;'
}

const submitFormButton = document.getElementById('submitButton')

submitFormButton.onclick = function Saa() {
    let inputTTNumber = document.getElementById('inputTTnumber')
    let ticketNumber = inputTTNumber.value
    console.log(ticketNumber)

    let worksInterval
    let inputDateA = document.getElementById('dateA')
    let inputTimeA = document.getElementById('timeA')
    let inputDateB = document.getElementById('dateB')
    let inputTimeB = document.getElementById('timeB')

    worksInterval = 'С: ' + inputDateA.value + ' ' + inputTimeA.value + '   ' + 'ПО: ' + inputDateB.value + ' ' + inputTimeB.value
    console.log(worksInterval)

    let selectTypeOfWorks = document.getElementById('selectTypeOfWorks')
    let typeOfWorks = selectTypeOfWorks.value

    console.log(typeOfWorks)

    let letsGetFullText = document.getElementById('getFullText')

    document.getElementById('getFullText').style = 'display: flex;'
    letsGetFullText.innerHTML = `
    <textarea class="readyText_area" cols="90" rows="2">Здравствуйте! Дата-центр O2XYGEN свидетельствует Вам своё уважение и информирует о следующих работах:
    
    Тип работ:
    ${typeOfWorks.value}

    Дата и время проведения работ:
    ${worksInterval}

    Предоставляемая услуга:
    ${selectService.value}, Точка А: ${inputLINKa.value}${inputVOLSa.value}, Точка Б: ${inputLINKb.value}${inputVOLSb.value}
    </textarea>
    `
}