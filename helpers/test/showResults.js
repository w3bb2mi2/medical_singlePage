import { getById } from "../hooks/getNodeElement"
import {  userAnswers } from "../mainData"

export function showResults() {
    getById("showResTrue").textContent = userAnswers.right
    getById("finalList_right").textContent = userAnswers.right

    getById("showResFalse").textContent = userAnswers.wrong
    getById("finalList_wrong").textContent =  userAnswers.wrong

    getById("showResNoAnswer").textContent = userAnswers.without
    getById("finalList_noAnswer").textContent = userAnswers.without
    
}