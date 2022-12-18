import "./index.html"
import "./static/css/animate.css"
import "./static/css/main.css"
import "./static/css/style.css"
import "./static/js/script.js"

import { btnTextQuestion1, btnTextQuestion2, userAnswers } from "./helpers/mainData";
import { hideAll } from "./helpers/displayElement";
import { title } from "./helpers/mainData";
import { mainImg } from "./helpers/mainData";
import { randerContent } from "./helpers/randerContent";
import { show, showResults } from "./helpers/displayElement";
import { showAllArticle } from "./helpers/displayElement";
import { showInputFinder } from "./helpers/displayElement";
import { checkAnswer1, checkAnswer2 } from "./helpers/questionFromText";
import { attachListenersOnElement } from "./helpers/hooks/listeners/attachListenerOnElement";
import { arrMenuItems, arrArticleItems, itemsPaginate } from "./helpers/mainData";
import { getById } from "./helpers/hooks/getNodeElement";
import { getResQuest36 } from "./helpers/test/question36";
import { finder } from "./helpers/search/search"


arrMenuItems.forEach(el=>attachListenersOnElement(el, randerContent))
itemsPaginate.forEach((el, index)=>attachListenersOnElement(el, ()=>getById(`id_${index+3}`).click()))
btnTextQuestion1.forEach(el=>attachListenersOnElement(el, checkAnswer1))
btnTextQuestion2.forEach(el=>attachListenersOnElement(el, checkAnswer2))
attachListenersOnElement("btnAnswerQuestion36", getResQuest36)
attachListenersOnElement("btnNextPage", next)
attachListenersOnElement("findAncor", finder)


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

 getById("btnPriviousPage").addEventListener('click', previous)


function previous() {
    let activeElement = document.querySelector(".active-item")

    activeElement?.classList?.remove("active-item")
    let prevElement = activeElement?.previousElementSibling
    prevElement?.classList.add("active-item")
    prevElement?.click()
}


function hideMainImg(){
    getById("divImageMain").classList.add("animate__bounceOutRight")
}


 getById("TESTOVYE_ZADANIYA").addEventListener("click", showTests)

function showTests() {
    mainImg.classList.add("hide")
    document.querySelector(".active-item")?.classList.remove("active-item")
    getById("test_list_item").classList.add("active-item")
    timeStartTesting = new Date();
    
    title.textContent = "Тестовые задания"
    getById("block_result").classList.remove("hide")
    getById("footerBtn").classList.add("hide")

    getById("outTestblock").classList.remove("hide")
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

 getById("finish_test").addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.add("hide")
    this.parentElement.parentElement.parentElement.nextElementSibling.classList.remove("hide")
    timeFinishTesting = new Date();
    let current = (timeFinishTesting - timeStartTesting) / 1000 / 60
    let roundTime = Math.round(current)
    getById("finalList_time").textContent = `${roundTime} мин.`
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





let timeStartTesting;
let timeFinishTesting;

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
                        userAnswers.right++
                        isAnswer++

                    }
                } else {
                    allinputs[i].parentElement.querySelector("p")?.classList?.add("error")
                    if (allinputs[i].checked) {
                        isAnswer++
                        userAnswers.wrong++

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
            userAnswers.without++
        }else
        if (isWrong >= 1 && isAnswer!=0 || isRight != raghtAnswerInQuestion &&  isAnswer!=0) {
            userAnswers.wrong++
        }
        if (isRight == raghtAnswerInQuestion && isWrong == 0 && !radioInp) {
            userAnswers.right++
        }
        btn.disabled = true

        btn.nextElementSibling.disabled = false
        showResults()
    })


})



//вперед назад по найденным элементам+их колличество




 getById("countResForvard").addEventListener("click", nextClickFind)

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

 getById("countResBack").addEventListener("click", previousClickFind)
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



function deleteAncorTegs() {
    document.querySelectorAll(".ancorFinded").forEach(el => {
        console.log(el)
    })
}



 getById("inputSearch").addEventListener("click", showInputFinder)







function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода

}

