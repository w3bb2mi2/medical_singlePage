
import { hideAllElems } from "../display/hideAllElem";
import { showSelectBlock } from "../display/showSelectBlock";
import { show } from "../display/showSingle";
import { getById } from "../hooks/getNodeElement";
import { controlTestQuestions, timeControlTesting, userAnswersControlTest } from "../mainData";
import { stopClock, timer } from "../time/clock";
import { resetLastResults } from "./resetLastResults";
import { resetResultControlQuestion } from "./resetResultControlQuestion";


const title = getById("articleTitle");  //заголовок

export function randomQuestions() {
    timeControlTesting.start = new Date()
    
    // getById("clock").remove()
    // getById("footer_container").insertAdjacentHTML("afterbegin", `<p id="clock"></p>`)
    resetLastResults()                         //очистка инпутов и кнопок
    resetResultControlQuestion();
    hideAllElems()
    showSelectBlock("controlTestId")
    show("articleTitle")
    
    controlTestQuestions.all = document.querySelectorAll(".controlQuestion")
    title.innerHTML = "Контрольное тестирование: ВОПРОС №<span id='idSpanNumberQuestion'>1</span>"


    let arrQuest = new Array();
    for (let i = 0; i < 37; i++) {
        arrQuest.push([Math.random(), i])
    }
    controlTestQuestions.hasToAskID = arrQuest.sort().slice(0, 10)
    controlTestQuestions.hasToAskID = controlTestQuestions.hasToAskID.map(el => el[1])
    // show("outTestblock")
    controlTestQuestions.all.forEach(el => el.classList.add("hide"))

    controlTestQuestions.hasToAsk = controlTestQuestions.hasToAskID.map(el => controlTestQuestions.all[el])


    controlTestQuestions.hasToAsk[0].classList.remove("hide")
}

export function nextControlTestQuestion() {
    const currentQuestion = +getById("idSpanNumberQuestion").textContent
    if (currentQuestion < 10) {
        controlTestQuestions.hasToAsk[currentQuestion - 1].classList.add("hide")
        controlTestQuestions.hasToAsk[currentQuestion]?.classList.remove("hide")
        getById("idSpanNumberQuestion").textContent = currentQuestion + 1
    } else {
        controlTestQuestions.all.forEach(el => el.classList.add("hide"))
        show("resControlPage")
        title.innerHTML = "Тестирование завершено"
        getControlTestRes()
        
    }
}
export function getControlTestRes() {
    if (userAnswersControlTest.right == 10) {
        getById("markControlQ").textContent = "5"
        getById("resText").textContent = "Тест пройден отлично"
        show("imgControlResSuc")
    } else if (userAnswersControlTest.right > 7 && userAnswersControlTest.right < 10) {
        getById("markControlQ").textContent = "4"
        getById("resText").textContent = "Тест пройден"
        show("imgControlResSuc")
    } else if (userAnswersControlTest.right > 4 && userAnswersControlTest.right < 8) {
        getById("markControlQ").textContent = "3"
        getById("resText").textContent = "Тест пройден"
        show("imgControlResSuc")
    } else {
        getById("markControlQ").textContent = "2"
        getById("resText").textContent = "Тест не пройден"
        show("imgControlResEr")
    }

    
    timeControlTesting.finish = new Date();

    const time = Math.round((timeControlTesting.finish - timeControlTesting.start) / 1000 / 60)
    getById("cont_finalList_time").textContent = time;

    getById("finalList_right_control").textContent = userAnswersControlTest.right
    getById("finalList_wrong_control").textContent = userAnswersControlTest.wrong
    getById("finalList_noAnswer_control").textContent = userAnswersControlTest.without
}

