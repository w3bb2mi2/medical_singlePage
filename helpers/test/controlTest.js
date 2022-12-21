import { hideAllElems } from "../display/hideAllElem";
import { showSelectBlock } from "../display/showSelectBlock";
import { getById } from "../hooks/getNodeElement";
import { resetResultControlQuestion } from "./resetResultControlQuestion";


export function randomQuestions(){
    resetResultControlQuestion();
    showSelectBlock("controlTestId")
    const allQuestion = document.querySelectorAll(".controlQuestion")
    
    let arrQuest = new Array();
    for(let i=0; i<74; i++){
        arrQuest.push([Math.random(), i])
    }
    const mainQuestion = arrQuest.sort().slice(0, 10)
    // show("outTestblock")
    allQuestion.forEach(el=>el.classList.add("hide"))
    console.log(allQuestion)
    // console.log(mainQuestion[9][1])
    allQuestion[mainQuestion[9][1]].classList.remove("hide")
}