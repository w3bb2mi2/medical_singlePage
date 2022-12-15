import { getPureValue } from "./getHtmlElement"

export function checkAnswer1() {


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion1_1") {
        let value = getPureValue("inputTextQuestion1_1")
        let totalValueLen = value.split(" ").length
        if (
            value.includes("артериал") &&
            value.includes("гипертен") &&
            totalValueLen < 5

        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // ОСТРЫЙ КОРОНАРНЫЙ СИНДРОМ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion2_1") {
        let value = getPureValue("inputTextQuestion2_1")
        if (
            value.includes("коронарн") &&
            value.includes("синдр")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ ОСТРОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion4_1") {
        let value = getPureValue("inputTextQuestion4_1")
        if (
            value.includes("от") &&
            value.includes("легк")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ ХРОНИЧЕСКОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion5_1") {
        let value = getPureValue("inputTextQuestion5_1")
        if (
            value.includes("сердеч") &&
            value.includes("недостато")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // АРИТМИЧЕСКИЙ СИНДРОМ
    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion6_1") {
        let value = getPureValue("inputTextQuestion6_1")
        if (
            value.includes("аритми")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ ЛЕГОЧНОЙ ГИПЕРТЕНЗИИ
    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion7_1") {
        let value = getPureValue("inputTextQuestion7_1")
        if (
            value.includes("легочн") &&
            value.includes("гипертен")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ МИТРАЛЬНОГО СТЕНОЗА

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion8_1") {
        let value = getPureValue("inputTextQuestion8_1")
        
        if (
            value.includes("митрал") &&
            value.includes("стеноз")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ МИТРАЛЬНОЙ НЕДОСТАТОЧНОСТИ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion9_1") {
        let value = getPureValue("inputTextQuestion9_1")
        
        if (
            value.includes("митрал") &&
            value.includes("стеноз")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ СТЕНОЗА УСТЬЯ АОРТЫ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion10_1") {
        let value = getPureValue("inputTextQuestion10_1")
        
        if (
            value.includes("стен") &&
            value.includes("усть") &&
            value.includes("аорт")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ АОРТАЛЬНОЙ НЕДОСТАТОЧНОСТИ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion11_1") {
        let value = getPureValue("inputTextQuestion11_1")
        
        if (
            value.includes("аортал") &&
            value.includes("недостаточ")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ ТРИКУСПИДАЛЬНОЙ НЕДОСТАТОЧНОСТИ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion12_1") {
        let value = getPureValue("inputTextQuestion12_1")
        
        if (
            value.includes("трикуспидал") &&
            value.includes("недостаточ")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
}


// Второй вопрос

export function checkAnswer2() {

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion1_2") {
        let value = getPureValue("inputTextQuestion1_2")
        if (
            value.includes("гипертонич") &&
            value.includes("криз")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion2").removeEventListener("click", checkAnswer2)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // ОСТРЫЙ КОРОНАРНЫЙ СИНДРОМ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion2_2") {
        let value = getPureValue("inputTextQuestion2_2")
        
        if (
            value.includes("кардиоген") &&
            value.includes("шок")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ ОСТРОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion4_2") {
        let value = getPureValue("inputTextQuestion4_2")
        
        if (
            value.includes("трепе") &&
            value.includes("предсерд")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ ХРОНИЧЕСКОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion5_2") {
        let value = getPureValue("inputTextQuestion5_2")
        
        if (
            value.includes("инфаркт")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // АРИТМИЧЕСКИЙ СИНДРОМ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion6_2") {
        let value = getPureValue("inputTextQuestion6_2")
        
        if (
            value.includes("фибрилля") &&
            value.includes("предсерд")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ ЛЕГОЧНОЙ ГИПЕРТЕНЗИИ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion7_2") {
        let value = getPureValue("inputTextQuestion7_2")
        
        if (
            value.includes("болезн") &&
            value.includes("легк") || value.includes("лёго") || value.includes("лего")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ МИТРАЛЬНОГО СТЕНОЗА


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion8_2") {
        let value = getPureValue("inputTextQuestion8_2")
        
        if (
            value.includes("болезн") &&
            value.includes("ревмат") &&
            value.includes("сердц")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ МИТРАЛЬНОЙ НЕДОСТАТОЧНОСТИ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion9_2") {
        let value = getPureValue("inputTextQuestion9_2")
        
        if (
            value.includes("недостаточн") &&
            value.includes("митрал") &&
            value.includes("клапан")

        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ СТЕНОЗА УСТЬЯ АОРТЫ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion10_2") {
        
        let value = getPureValue("inputTextQuestion10_2")
        
        if (
            value.includes("кальц") &&
            value.includes("створ")


        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ АОРТАЛЬНОЙ НЕДОСТАТОЧНОСТИ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion11_2") {
        let value = getPureValue("inputTextQuestion11_2")
        
        if (
            value.includes("нфекционн") &&
            value.includes("ндокард")

        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ ТРИКУСПИДАЛЬНОЙ НЕДОСТАТОЧНОСТИ
    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion12_2") {
        let value = getPureValue("inputTextQuestion12_2")
        
        if (
            value.includes("наркома") || value.includes("наркот")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
}
