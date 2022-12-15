function deleteActiveItem() {
    document.querySelectorAll(".active-item").forEach(el => el.classList.remove("active-item"))
}

// показать все пособие целиком
function showAllArticle() {
    document.querySelectorAll(".headTitle").forEach(el => el.classList.remove("hide"))
    document.querySelectorAll(".sectionClass:not(#block_result)").forEach(el => el.classList.remove("hide"))
}
//увеличиваем инпут

function w320(id) {
    document.getElementById(id).classList.add("width320")
}
//показать элемент
function show(id) {

    document.getElementById(id).classList.remove("hide")
}
function hide(id) {
    document.getElementById(id).classList.add("hide")
}
//удалить класс у элемена
function deleteClass(id, cls) {
    document.getElementById(id).classList.remove(cls)
}
//прячем все

function hideAll() {
    deleteActiveItem()
    document.querySelector(".mainImg").classList.add("hide")            //Заставка
    document.querySelector(".test_1-main")?.classList.add("hide")       //тесты
    document.getElementById("outTestblock").classList.add("hide")
    document.getElementById("footerBtn").classList.add("hide")
    document.getElementById("block_result").classList.add("hide")    //результаты теста
    document.getElementById("test12122022").classList.add("hide")    //результаты теста


}
const title = document.getElementById("articleTitle")

document.getElementById("id_1").addEventListener("click", randerContent)
document.getElementById("id_2").addEventListener("click", randerContent)
document.getElementById("id_3").addEventListener("click", randerContent)
document.getElementById("id_4").addEventListener("click", randerContent)
document.getElementById("id_5").addEventListener("click", randerContent)
document.getElementById("id_6").addEventListener("click", randerContent)
document.getElementById("id_7").addEventListener("click", randerContent)
document.getElementById("id_8").addEventListener("click", randerContent)
document.getElementById("id_9").addEventListener("click", randerContent)
document.getElementById("id_10").addEventListener("click", randerContent)
document.getElementById("id_11").addEventListener("click", randerContent)
document.getElementById("id_12").addEventListener("click", randerContent)
document.getElementById("id_13").addEventListener("click", randerContent)
document.getElementById("zadaniyaEKG").addEventListener("click", randerContent)
document.getElementById("literatura").addEventListener("click", randerContent)



document.getElementById("paginate3").addEventListener("click", function () {
    document.getElementById("id_3").click()
})
document.getElementById("paginate4").addEventListener("click", function () {
    document.getElementById("id_4").click()
})
document.getElementById("paginate5").addEventListener("click", function () {
    document.getElementById("id_5").click()
})
document.getElementById("paginate6").addEventListener("click", function () {
    document.getElementById("id_6").click()
})
document.getElementById("paginate7").addEventListener("click", function () {
    document.getElementById("id_7").click()
})
document.getElementById("paginate8").addEventListener("click", function () {
    document.getElementById("id_8").click()
})
document.getElementById("paginate9").addEventListener("click", function () {
    document.getElementById("id_9").click()
})
document.getElementById("paginate10").addEventListener("click", function () {
    document.getElementById("id_10").click()
})
document.getElementById("paginate10").addEventListener("click", function () {
    document.getElementById("id_10").click()
})
document.getElementById("paginate11").addEventListener("click", function () {
    document.getElementById("id_11").click()
})
document.getElementById("paginate12").addEventListener("click", function () {
    document.getElementById("id_12").click()
})
document.getElementById("paginate13").addEventListener("click", function () {
    document.getElementById("id_13").click()
})




document.getElementById("btnNextPage").addEventListener("click", next)
function next() {
    let activeElement = document.querySelector(".active-item")

    if (activeElement.id == "id_12") {
        this.classList.add("hide")
    }
    activeElement?.classList?.remove("active-item")
    let nextElement = activeElement?.nextElementSibling
    nextElement?.classList.add("active-item")
    nextElement?.click()


}

document.getElementById("btnPriviousPage").addEventListener('click', previous)


function previous() {
    let activeElement = document.querySelector(".active-item")

    activeElement?.classList?.remove("active-item")
    let prevElement = activeElement?.previousElementSibling
    prevElement?.classList.add("active-item")
    prevElement?.click()
}


function randerContent() {
    
    deleteActiveItem()
    document.querySelectorAll(".headTitle").forEach(el => el.classList.add("hide"))
    document.querySelector(".mainImg").classList.add("hide")
    document.getElementById("test12122022").classList.remove("hide")
    document.querySelector(".content-out").scrollTop = 0
    document.getElementById("block_result").classList.add("hide")
    document.querySelector(".test_1-main")?.classList.add("hide")
    document.getElementById("outTestblock").classList.add("hide")
    document.getElementById("footerBtn").classList.remove("hide")

    show("articleTitle")
    hideInputFinder()
    document.querySelector(".active-item")?.classList.remove("active-item")
    this?.classList?.add("active-item")
    if (this.id == 'id_1') {
        title.textContent = "СПИСОК СОКРАЩЕНИЙ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_1").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.add("hide")
    }
    if (this.id == 'id_2') {
        title.textContent = "Введение"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_2").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
    }
    if (this.id == 'id_3') {
        title.textContent = "СИНДРОМ АРТЕРИАЛЬНОЙ ГИПЕРТЕНЗИИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_3").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate3").classList.add("active-item")
    }
    if (this.id == 'id_4') {
        title.textContent = "ОСТРЫЙ КОРОНАРНЫЙ СИНДРОМ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_4").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate4").classList.add("active-item")
    }
    if (this.id == 'id_5') {
        title.textContent = "СИНДРОМ ОСТРОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_5").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate5").classList.add("active-item")
    }
    if (this.id == 'id_6') {
        title.textContent = "СИНДРОМ ХРОНИЧЕСКОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_6").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate6").classList.add("active-item")
    }
    if (this.id == 'id_7') {
        title.textContent = "АРИТМИЧЕСКИЙ СИНДРОМ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_7").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate7").classList.add("active-item")
    }
    if (this.id == 'id_8') {
        title.textContent = "СИНДРОМ ЛЕГОЧНОЙ ГИПЕРТЕНЗИИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_8").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate8").classList.add("active-item")
    }
    if (this.id == 'id_9') {
        title.textContent = "СИНДРОМ МИТРАЛЬНОГО СТЕНОЗА"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_9").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate9").classList.add("active-item")
    }
    if (this.id == 'id_10') {
        title.textContent = "СИНДРОМ МИТРАЛЬНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_10").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate10").classList.add("active-item")
    }
    if (this.id == 'id_11') {
        title.textContent = "СИНДРОМ СТЕНОЗА УСТЬЯ АОРТЫ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_11").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate11").classList.add("active-item")
    }
    if (this.id == 'id_12') {
        title.textContent = "СИНДРОМ АОРТАЛЬНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_12").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate12").classList.add("active-item")
    }
    if (this.id == 'id_13') {
        title.textContent = "СИНДРОМ ТРИКУСПИДАЛЬНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_13").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.add("hide")
        document.getElementById("paginate13").classList.add("active-item")
    }
    if (this.id == 'zadaniyaEKG') {
        title.textContent = "ЗАДАНИЯ ДЛЯ САМОСТОЯТЕЛЬНОЙ РАБОТЫ (ЭКГ)"
        document.querySelector(".active-item")?.classList.remove("active-item")
        document.getElementById("test_list_item").classList.add("active-item")
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_14").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.add("hide")
        document.getElementById("footerBtn").classList.add("hide")
    }
    if (this.id == 'literatura') {
        title.textContent = "РЕКОМЕНДУЕМАЯ ЛИТЕРАТУРА"
        document.querySelector(".active-item")?.classList.remove("active-item")
        document.getElementById("test_list_item").classList.add("active-item")
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_15").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.add("hide")
        document.getElementById("footerBtn").classList.add("hide")
    }



}





function getPureValue(id) {
    return document.getElementById(id).value.replace(/[.?,0-9/\\*-+]/g, "").replace(/c/gi, "с").toLocaleLowerCase()
}


document.getElementById("btnInputTextQuestion1_1").addEventListener("click", checkAnswer1)
document.getElementById("btnInputTextQuestion2_1").addEventListener("click", checkAnswer1)
document.getElementById("btnInputTextQuestion4_1").addEventListener("click", checkAnswer1)
document.getElementById("btnInputTextQuestion5_1").addEventListener("click", checkAnswer1)
document.getElementById("btnInputTextQuestion6_1").addEventListener("click", checkAnswer1)
document.getElementById("btnInputTextQuestion7_1").addEventListener("click", checkAnswer1)
document.getElementById("btnInputTextQuestion8_1").addEventListener("click", checkAnswer1)
document.getElementById("btnInputTextQuestion9_1").addEventListener("click", checkAnswer1)
document.getElementById("btnInputTextQuestion10_1").addEventListener("click", checkAnswer1)
document.getElementById("btnInputTextQuestion11_1").addEventListener("click", checkAnswer1)
document.getElementById("btnInputTextQuestion12_1").addEventListener("click", checkAnswer1)






document.getElementById("btnInputTextQuestion1_2").addEventListener("click", checkAnswer2)
document.getElementById("btnInputTextQuestion2_2").addEventListener("click", checkAnswer2)
document.getElementById("btnInputTextQuestion4_2").addEventListener("click", checkAnswer2)
document.getElementById("btnInputTextQuestion5_2").addEventListener("click", checkAnswer2)
document.getElementById("btnInputTextQuestion6_2").addEventListener("click", checkAnswer2)
document.getElementById("btnInputTextQuestion7_2").addEventListener("click", checkAnswer2)
document.getElementById("btnInputTextQuestion8_2").addEventListener("click", checkAnswer2)
document.getElementById("btnInputTextQuestion9_2").addEventListener("click", checkAnswer2)
document.getElementById("btnInputTextQuestion10_2").addEventListener("click", checkAnswer2)
document.getElementById("btnInputTextQuestion11_2").addEventListener("click", checkAnswer2)
document.getElementById("btnInputTextQuestion12_2").addEventListener("click", checkAnswer2)

function hideMainImg(){
    document.getElementById("divImageMain").classList.add("animate__bounceOutRight")
}

function checkAnswer1() {


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

function checkAnswer2() {

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



document.getElementById("TESTOVYE_ZADANIYA").addEventListener("click", showTests)

function showTests() {
    document.querySelector(".mainImg").classList.add("hide")
    document.querySelector(".active-item")?.classList.remove("active-item")
    document.getElementById("test_list_item").classList.add("active-item")
    timeStartTesting = new Date();
    
    document.getElementById("articleTitle").textContent = "Тестовые задания"
    document.getElementById("block_result").classList.remove("hide")
    document.getElementById("footerBtn").classList.add("hide")

    document.getElementById("outTestblock").classList.remove("hide")
    document.querySelector("#test12122022")?.classList.add("hide")

}

document.querySelectorAll(".btnNext:not(#finish_test)").forEach(btn => {
    btn.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.classList.add("hide")
        this.parentElement.parentElement.parentElement.nextElementSibling.classList.remove("hide")
    })
})

document.querySelectorAll(".btnLast").forEach(btn => {
    btn.addEventListener("click", function () {

        this.parentElement.parentElement.parentElement.classList.add("hide")
        this.parentElement.parentElement.parentElement.previousElementSibling.classList.remove("hide")
    })
})

document.getElementById("finish_test").addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.add("hide")
    this.parentElement.parentElement.parentElement.nextElementSibling.classList.remove("hide")
    timeFinishTesting = new Date();
    let current = (timeFinishTesting - timeStartTesting) / 1000 / 60
    let roundTime = Math.round(current)
    document.getElementById("finalList_time").textContent = `${roundTime} мин.`
})



document.querySelectorAll(".answer").forEach(el => {
    el.addEventListener("click", function (e) {
        let input = e.currentTarget.querySelector("input")


        if (input?.type == "radio") {
            input.closest("ul").querySelectorAll("input").forEach(el => {
                el.checked = false
            })
            input.checked = false
            el.querySelectorAll("input").forEach(input => {
                input.disabled = true;
            })
            e.target.parentElement.querySelector("input").checked = true
            e.target.parentElement.querySelector("input").disabled = false
        }
        if (input?.type == "checkbox") {
            
        }
    })

})


document.querySelector(".question-36").querySelectorAll(".question-36-item").forEach(el => {
    el.addEventListener("click", function (e) {
        let text = this.innerText
        let menu = this.closest("ul")
        menu.classList.remove("show")
        const btn = menu.previousElementSibling
        btn.innerText = text

    })
})



document.getElementById("btnAnswerQuestion36").addEventListener("click", getResQuest36)

function getResQuest36() {
    if (document.getElementById("dropAns1").innerText == 'I СТАДИЯ ХСН') {
        document.getElementById("dropAns1").classList.add("bg-green")
    } else {
        document.getElementById("dropAns1").classList.add("bg-red")
    }

    if (document.getElementById("dropAns5").innerText == 'I СТАДИЯ ХСН') {
        document.getElementById("dropAns5").classList.add("bg-green")
    } else {
        document.getElementById("dropAns5").classList.add("bg-red")
    }

    if (document.getElementById("dropAns9").innerText == 'I СТАДИЯ ХСН') {
        document.getElementById("dropAns9").classList.add("bg-green")
    } else {
        document.getElementById("dropAns9").classList.add("bg-red")
    }



    if (document.getElementById("dropAns2").innerText == 'IIA СТАДИЯ ХСН') {
        document.getElementById("dropAns2").classList.add("bg-green")
    } else {
        document.getElementById("dropAns2").classList.add("bg-red")
    }

    if (document.getElementById("dropAns6").innerText == 'IIA СТАДИЯ ХСН') {
        document.getElementById("dropAns6").classList.add("bg-green")
    } else {
        document.getElementById("dropAns6").classList.add("bg-red")
    }

    if (document.getElementById("dropAns10").innerText == 'IIA СТАДИЯ ХСН') {
        document.getElementById("dropAns10").classList.add("bg-green")
    } else {
        document.getElementById("dropAns10").classList.add("bg-red")
    }



    if (document.getElementById("dropAns3").innerText == 'IIБ СТАДИЯ ХСН') {
        document.getElementById("dropAns3").classList.add("bg-green")
    } else {
        document.getElementById("dropAns3").classList.add("bg-red")
    }

    if (document.getElementById("dropAns7").innerText == 'IIБ СТАДИЯ ХСН') {
        document.getElementById("dropAns7").classList.add("bg-green")
    } else {
        document.getElementById("dropAns7").classList.add("bg-red")
    }

    if (document.getElementById("dropAns11").innerText == 'IIБ СТАДИЯ ХСН') {
        document.getElementById("dropAns11").classList.add("bg-green")
    } else {
        document.getElementById("dropAns11").classList.add("bg-red")
    }


    if (document.getElementById("dropAns4").innerText == 'III СТАДИЯ ХСН') {
        document.getElementById("dropAns4").classList.add("bg-green")
    } else {
        document.getElementById("dropAns4").classList.add("bg-red")
    }

    if (document.getElementById("dropAns8").innerText == 'III СТАДИЯ ХСН') {
        document.getElementById("dropAns8").classList.add("bg-green")
    } else {
        document.getElementById("dropAns8").classList.add("bg-red")
    }

    if (document.getElementById("dropAns12").innerText == 'III СТАДИЯ ХСН') {
        document.getElementById("dropAns12").classList.add("bg-green")
    } else {
        document.getElementById("dropAns12").classList.add("bg-red")
    }




    if (
        document.getElementById("dropAns1").innerText == 'I СТАДИЯ ХСН' &&
        document.getElementById("dropAns5").innerText == 'I СТАДИЯ ХСН' &&
        document.getElementById("dropAns9").innerText == 'I СТАДИЯ ХСН' &&

        document.getElementById("dropAns2").innerText == 'IIA СТАДИЯ ХСН' &&
        document.getElementById("dropAns6").innerText == 'IIA СТАДИЯ ХСН' &&
        document.getElementById("dropAns10").innerText == 'IIA СТАДИЯ ХСН' &&

        document.getElementById("dropAns3").innerText == 'IIБ СТАДИЯ ХСН' &&
        document.getElementById("dropAns7").innerText == 'IIБ СТАДИЯ ХСН' &&
        document.getElementById("dropAns11").innerText == 'IIБ СТАДИЯ ХСН' &&

        document.getElementById("dropAns4").innerText == 'III СТАДИЯ ХСН' &&
        document.getElementById("dropAns8").innerText == 'III СТАДИЯ ХСН' &&
        document.getElementById("dropAns12").innerText == 'III СТАДИЯ ХСН'

    ) {
        rigthAnswer++

    } else if (
        document.getElementById("dropAns1").innerText == 'Выберете ' &&
        document.getElementById("dropAns5").innerText == 'Выберете ' &&
        document.getElementById("dropAns9").innerText == 'Выберете ' &&

        document.getElementById("dropAns2").innerText == 'Выберете ' &&
        document.getElementById("dropAns6").innerText == 'Выберете ' &&
        document.getElementById("dropAns10").innerText == 'Выберете ' &&

        document.getElementById("dropAns3").innerText == 'Выберете ' &&
        document.getElementById("dropAns7").innerText == 'Выберете ' &&
        document.getElementById("dropAns11").innerText == 'Выберете ' &&

        document.getElementById("dropAns4").innerText == 'Выберете ' &&
        document.getElementById("dropAns8").innerText == 'Выберете ' &&
        document.getElementById("dropAns12").innerText == 'Выберете '
    ) {
        noAnswer++
    } else {
        wrongAnswer++
    }

    this.disabled = true
    this.nextElementSibling.disabled = false
    showResults()

}
let timeStartTesting;
let timeFinishTesting;
let rigthAnswer = 0;
let wrongAnswer = 0;
let noAnswer = 0;
document.querySelectorAll(".btnAnswer:not(#btnAnswerQuestion36):not(.btnInputTextQuestion)").forEach(btn => {
    btn.addEventListener("click", function (e) {
        let allinputs = this.closest(".question ")?.querySelectorAll("input")
        let allQuestions = 0;   //всего вопросов
        let raghtAnswerInQuestion = 0;
        let isAnswer = 0;       //отвечено
        let isRight = 0;        //отвечено правильно
        let isWrong = 0;        //отвечено правильно
        let radioInp = false;
        for (let i = 0; i < allinputs.length; i++) {
            if (allinputs[i].type == "radio") {
                radioInp = true;
                if (allinputs[i].dataset.answer == "x") {
                    allinputs[i].parentElement.querySelector("p")?.classList?.add("right")
                    allinputs[i].classList?.add("right")
                    if (allinputs[i].checked) {
                        rigthAnswer++
                        isAnswer++

                    }
                } else {
                    allinputs[i].parentElement.querySelector("p")?.classList?.add("error")
                    if (allinputs[i].checked) {
                        isAnswer++
                        wrongAnswer++

                    }
                }
            } else if (allinputs[i].type == "checkbox") {

                if (allinputs[i].dataset.answer) {
                    raghtAnswerInQuestion++;
                    allinputs[i].parentElement.classList.add("right")
                    if (allinputs[i].checked) {           //привильные ответы
                        isRight++
                        isAnswer++
                    } else {                                //не правильные ответы

                    }
                } else {
                    allinputs[i].parentElement.classList.add("error")
                    if (allinputs[i].checked) {
                        isWrong++
                        isAnswer++
                    }
                }
            }


        }


        if (!isAnswer) {
            noAnswer++
        }else
        if (isWrong >= 1 && isAnswer!=0 || isRight != raghtAnswerInQuestion &&  isAnswer!=0) {
            wrongAnswer++
        }
        if (isRight == raghtAnswerInQuestion && isWrong == 0 && !radioInp) {
            rigthAnswer++
        }
        btn.disabled = true

        btn.nextElementSibling.disabled = false
        showResults()
    })


})



function showResults() {
    document.getElementById("showResTrue").textContent = rigthAnswer
    document.getElementById("finalList_right").textContent = rigthAnswer

    document.getElementById("showResFalse").textContent = wrongAnswer
    document.getElementById("finalList_wrong").textContent = wrongAnswer

    document.getElementById("showResNoAnswer").textContent = noAnswer
    document.getElementById("finalList_noAnswer").textContent = noAnswer
}

let arrAncor = []

function showHears() {

}

document.getElementById("findAncor").addEventListener("click", finder)
let lastResFind = ""; // последний удачный результат
let copy_page = ""; // копия страницы в ихсодном виде
function trimStr(s) {
    s = s.replace(/^\s+/g, '');
    return s.replace(/\s+$/g, '');
}
let originalNode = [];
export let arrID;

function finder() {
    arrID = []
    hideAll()
    showAllArticle()
    getOriginlNodes()

    document.getElementById("test12122022").classList.remove("hide")


    let str = document.getElementById("inputSearch").value
    if(str.length<3)return
    let textP = document.getElementById("test12122022").querySelectorAll('p')
    let textH6 = document.getElementById("test12122022").querySelectorAll('h6')
    let textLI = document.getElementById("test12122022").querySelectorAll('li')
    var re = new RegExp(str, "i");
    for (let i = 0; i < textP.length; i++) {
        if (textP[i].innerText.toLowerCase().includes(str.toLowerCase())) {
            let incl = textP[i].innerText.toLowerCase().indexOf(str.toLowerCase())

            originalNode.push(textP[i])

           
            let p = textP[i].innerText.replace(textP[i].innerText.slice(incl, incl + str.length), `<span class="bg-lightRed markedSpan" id="ancor_P${i}">${textP[i].innerText.slice(incl, incl + str.length)}</span>`)

            textP[i].innerHTML = p
            let ref = `
            <a href="#ancor_P${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>
            `
            document.getElementById("divForRef").insertAdjacentHTML("beforeend", ref)
            arrID.push(`ancorRef${i}`)
        }
    }

    for (let i = 0; i < textH6.length; i++) {
        if (textH6[i].innerText.toLowerCase().includes(str.toLowerCase())) {
            let incl = textH6[i].innerText.toLowerCase().indexOf(str.toLowerCase())
            originalNode.push(textH6[i])
            
            
            let p = textH6[i].innerText.replace(textH6[i].innerText.slice(incl, incl + str.length), `<span class="bg-lightRed markedSpan" id="ancor_H6${i}">${textH6[i].innerText.slice(incl, incl + str.length)}</span>`)
            textH6[i].innerHTML = p
            let ref = `
            <a href="#ancor_H6${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>
            `
            document.getElementById("divForRef").insertAdjacentHTML("beforeend", ref)
            arrID.push(`ancorRef${i}`)


        }
        for (let i = 0; i < textLI.length; i++) {
            if (textLI[i].innerText.toLowerCase().includes(str.toLowerCase())) {
                let incl = textLI[i].innerText.toLowerCase().indexOf(str.toLowerCase())
                
                originalNode.push(textLI[i])
                
                let p = textLI[i].innerText.replace(textLI[i].innerText.slice(incl, incl + str.length), `<span class="bg-lightRed markedSpan" id="ancor_Li${i}">${textLI[i].innerText.slice(incl, incl + str.length)}</span>`)
                textLI[i].innerHTML = p
                let ref = `
                <a href="#ancor_Li${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>
                `
                document.getElementById("divForRef").insertAdjacentHTML("beforeend", ref)
                arrID.push(`ancorRef${i}`)
    
    
            }}
    }
    countElemsFinded()
    
    document.getElementById(arrID[0])?.classList.add("activeRef")

    setTimeout(() => {
        document.getElementById(arrID[0]).click()
    }, 0);
}

//вперед назад по найденным элементам+их колличество
let countFinder;

function countElemsFinded() {
    let count = document.querySelectorAll(".ancorA").length

    document.getElementById("countRes").textContent = count;
}

document.getElementById("countResForvard").addEventListener("click", nextClickFind)

let idCount = 0
function nextClickFind() {
    let currentEl = document.querySelector(".activeRef")
    let nextEl = currentEl?.nextElementSibling
    if(!nextEl || !currentEl)return
    currentEl?.classList.remove("activeRef")
    nextEl?.classList.add("activeRef")
    setTimeout(() => {
        if(nextEl.classList.contains("ancorA")){
            nextEl?.nextElementSibling.click()
        }
    }, 0)

}

document.getElementById("countResBack").addEventListener("click", previousClickFind)
function previousClickFind() {
    let currentEl = document.querySelector(".activeRef")
    let prevElem = currentEl?.previousElementSibling
    if(!prevElem)return
    currentEl.classList.remove("activeRef")
    prevElem?.classList.add("activeRef")
    setTimeout(() => {
        prevElem?.nextElementSibling.click()
    }, 0)

}

function getOriginlNodes() {
    document.getElementById("divForRef").remove()
    document.getElementById("blockInputSearch").insertAdjacentHTML("afterbegin", `<div id="divForRef" class="hide"></div>`)
    originalNode.forEach(el => {
        el.innerHTML = el.textContent
    })
}


function deleteAncorTegs() {
    document.querySelectorAll(".ancorFinded").forEach(el => {
        console.log(el)
    })
}



document.getElementById("inputSearch").addEventListener("click", showInputFinder)

function showInputFinder() {
    w320("inputSearch");
    show("divArrovInput");
    hide("articleTitle");
    show("findAncor")

}

function hideInputFinder() {
    deleteClass("inputSearch", "width320")
    hide("divArrovInput");
    show("articleTitle")
    hide("findAncor")


}




function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода

}

