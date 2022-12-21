import { hideAll } from "../displayElement";
import { getById } from "../hooks/getNodeElement";
import { selectorAll } from "../hooks/querySelectorAll";

export function randomQuestions(){
    const allQuestion = document.querySelectorAll(".question")
    let randomQuestion = Math.random()*100
    let arrQuest = new Array();
    for(let i=0; i<74; i++){
        arrQuest.push([Math.random(), i])
    }
    const mainQuestion = arrQuest.sort().slice(0, 10)
    hideAll()
    // show("outTestblock")
    getById("outTestblock").classList.remove("hide")
    allQuestion.forEach(el=>el.classList.add("hide"))
    console.log(mainQuestion)
    console.log(mainQuestion[9][1])
    allQuestion[mainQuestion[9][1]].classList.remove("hide")
}