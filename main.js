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


arrMenuItems.forEach(el=>attachListenersOnElement(el, randerContent))
itemsPaginate.forEach((el, index)=>attachListenersOnElement(el, ()=>getById(`id_${index+3}`).click()))
btnTextQuestion1.forEach(el=>attachListenersOnElement(el, checkAnswer1))
btnTextQuestion2.forEach(el=>attachListenersOnElement(el, checkAnswer2))
attachListenersOnElement("btnAnswerQuestion36", getResQuest36)
attachListenersOnElement("btnNextPage", next)


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




let arrAncor = []

 getById("findAncor").addEventListener("click", finder)

let originalNode = [];
let arrID;

function finder() {
    arrID = []
    hideAll()
    showAllArticle()
    getOriginlNodes()

    getById("test12122022").classList.remove("hide")


    let str = getById("inputSearch").value
    if(str.length<3)return
    let textP = getById("test12122022").querySelectorAll('p')
    let textH6 = getById("test12122022").querySelectorAll('h6')
    let textLI = getById("test12122022").querySelectorAll('li')
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
            getById("divForRef").insertAdjacentHTML("beforeend", ref)
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
            getById("divForRef").insertAdjacentHTML("beforeend", ref)
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
                getById("divForRef").insertAdjacentHTML("beforeend", ref)
                arrID.push(`ancorRef${i}`)
    
    
            }}
    }
    countElemsFinded()
    
    getById(arrID[0])?.classList.add("activeRef")

    setTimeout(() => {
        getById(arrID[0]).click()
    }, 0);
}

//вперед назад по найденным элементам+их колличество


function countElemsFinded() {
    let count = document.querySelectorAll(".ancorA").length

    getById("countRes").textContent = count;
}

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

function getOriginlNodes() {
    getById("divForRef").remove()
    getById("blockInputSearch").insertAdjacentHTML("afterbegin", `<div id="divForRef" class="hide"></div>`)
    originalNode.forEach(el => {
        el.innerHTML = el.textContent
    })
}


function deleteAncorTegs() {
    document.querySelectorAll(".ancorFinded").forEach(el => {
        console.log(el)
    })
}



 getById("inputSearch").addEventListener("click", showInputFinder)







function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода

}

