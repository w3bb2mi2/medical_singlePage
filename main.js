import "./index.html"
import "./style/normolize.css"
import "./static/css/main.css"
import "./static/css/style.css"
import "./static/css/animate.css"
import "./style/_style.scss"
import "./static/js/script.js"


import { btnTextQuestion1, btnTextQuestion2, timeForTest, timeTesting, userAnswers, userAnswersControlTest } from "./helpers/mainData";

import { randerContent } from "./helpers/randerContent";
import { showInputFinder } from "./helpers/displayElement";
import { checkAnswer1, checkAnswer2 } from "./helpers/questionFromText";
import { attachListenersOnElement } from "./helpers/hooks/listeners/attachListenerOnElement";
import { arrMenuItems, itemsPaginate } from "./helpers/mainData";
import { getById } from "./helpers/hooks/getNodeElement";
import { getResQuest36 } from "./helpers/test/question36";
import { finder } from "./helpers/search/search"
import { next } from "./helpers/navigationOnArticle/next"
import { previous } from "./helpers/navigationOnArticle/prev"
import {nextControlTestQuestion, randomQuestions} from "./helpers/test/controlTest"

import { showTests } from "./helpers/test/showTests"
import { mainLogic } from "./helpers/test/mainLogic"

import { selectorAll } from "./helpers/hooks/querySelectorAll"
import { getResQuest36control } from "./helpers/test/controlQuestion36"
import { selectAns } from "./helpers/selectAns"
import { stopClock, timer } from "./helpers/time/clock"
arrMenuItems.forEach(el=>attachListenersOnElement(el, randerContent))
itemsPaginate.forEach((el, index)=>attachListenersOnElement(el, ()=>getById(`id_${index+3}`).click()))
btnTextQuestion1.forEach(el=>attachListenersOnElement(el, checkAnswer1))
btnTextQuestion2.forEach(el=>attachListenersOnElement(el, checkAnswer2))
attachListenersOnElement("btnAnswerQuestion36", getResQuest36)
attachListenersOnElement("btnNextPage", next)
attachListenersOnElement("findAncor", finder)
attachListenersOnElement("inputSearch", showInputFinder)
attachListenersOnElement("TESTOVYE_ZADANIYA", showTests)
attachListenersOnElement("countResForvard", nextClickFind)
attachListenersOnElement("btnPriviousPage", previous)
attachListenersOnElement("controlTest", randomQuestions)
attachListenersOnElement("controlQuestion36", getResQuest36control)


selectAns()
mainLogic();
selectorAll(".btnAnswerControl").forEach(el=>el.addEventListener("click", nextControlTestQuestion))







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
    stopClock()
    this.parentElement.parentElement.parentElement.classList.add("hide")
    this.parentElement.parentElement.parentElement.nextElementSibling.classList.remove("hide")
    timeTesting.finish = new Date();
    let current = (timeTesting.finish - timeTesting.start) / 1000 / 60
    let roundTime = Math.round(current)
    getById("finalList_time").textContent = `${roundTime} мин.`
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

document.querySelector(".controlQuestion-36").querySelectorAll(".controlQuestion-36-item").forEach(el => {
    el.addEventListener("click", function (e) {
        let text = this.innerText
        let menu = this.closest("ul")
        menu.classList.remove("show")
        const btn = menu.previousElementSibling
        btn.innerText = text

    })
})

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




 



