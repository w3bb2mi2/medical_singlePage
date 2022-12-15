
import { userAnswers } from "./helpers/mainData";
import { hideAll } from "./helpers/displayElement";
import { title } from "./helpers/mainData";
import { mainImg } from "./helpers/mainData";
import { randerContent } from "./helpers/randerContent";
import { show, showResults } from "./helpers/displayElement";
import { showAllArticle } from "./helpers/displayElement";
import { showInputFinder } from "./helpers/displayElement";
import { checkAnswer1, checkAnswer2 } from "./helpers/questionFromText";




//увеличиваем инпут

function w320(id) {
    document.getElementById(id).classList.add("width320")
}

//удалить класс у элемена
function deleteClass(id, cls) {
    document.getElementById(id).classList.remove(cls)
}
//прячем все


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


document.getElementById("TESTOVYE_ZADANIYA").addEventListener("click", showTests)

function showTests() {
    mainImg.classList.add("hide")
    document.querySelector(".active-item")?.classList.remove("active-item")
    document.getElementById("test_list_item").classList.add("active-item")
    timeStartTesting = new Date();
    
    title.textContent = "Тестовые задания"
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
        userAnswers.right++

    } else if (
        document.getElementById("dropAns1").innerText == 'Выберите правильный ответ ' &&
        document.getElementById("dropAns5").innerText == 'Выберите правильный ответ ' &&
        document.getElementById("dropAns9").innerText == 'Выберите правильный ответ ' &&

        document.getElementById("dropAns2").innerText == 'Выберите правильный ответ ' &&
        document.getElementById("dropAns6").innerText == 'Выберите правильный ответ ' &&
        document.getElementById("dropAns10").innerText == 'Выберите правильный ответ ' &&

        document.getElementById("dropAns3").innerText == 'Выберите правильный ответ ' &&
        document.getElementById("dropAns7").innerText == 'Выберите правильный ответ ' &&
        document.getElementById("dropAns11").innerText == 'Выберите правильный ответ ' &&

        document.getElementById("dropAns4").innerText == 'Выберите правильный ответ ' &&
        document.getElementById("dropAns8").innerText == 'Выберите правильный ответ ' &&
        document.getElementById("dropAns12").innerText == 'Выберите правильный ответ '
    ) {
        userAnswers.without++
    } else {
        userAnswers.wrong++
    }

    this.disabled = true
    this.nextElementSibling.disabled = false
    showResults()

}
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
let arrID;

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







function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода

}
