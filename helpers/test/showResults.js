import {  userAnswers } from "../mainData"

export function showResults() {
    document.getElementById("showResTrue").textContent = userAnswers.right
    document.getElementById("finalList_right").textContent = userAnswers.right

    document.getElementById("showResFalse").textContent = userAnswers.wrong
    document.getElementById("finalList_wrong").textContent =  userAnswers.wrong

    document.getElementById("showResNoAnswer").textContent = userAnswers.without
    document.getElementById("finalList_noAnswer").textContent = userAnswers.without
}