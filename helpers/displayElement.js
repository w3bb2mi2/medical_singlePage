import { w320 } from "./changeCSSpref";
import { mainImg, userAnswers } from "./mainData";

 //показать элемент
export function show(id) {
    document.getElementById(id).classList.remove("hide")
}

export function deleteActiveItem() {
    document.querySelectorAll(".active-item").forEach(el => el.classList.remove("active-item"))
}

export function hideInputFinder() {
    deleteClass("inputSearch", "width320")
    hide("divArrovInput");
    show("articleTitle")
    hide("findAncor")
}

//удалить класс у элемена
export function deleteClass(id, cls) {
    document.getElementById(id).classList.remove(cls)
}


export function hide(id) {
    document.getElementById(id)?.classList.add("hide")
}



export function showResults() {
    document.getElementById("showResTrue").textContent = userAnswers.right
    document.getElementById("finalList_right").textContent = userAnswers.right

    document.getElementById("showResFalse").textContent = userAnswers.wrong
    document.getElementById("finalList_wrong").textContent =  userAnswers.wrong

    document.getElementById("showResNoAnswer").textContent = userAnswers.without
    document.getElementById("finalList_noAnswer").textContent = userAnswers.without
}


export function showInputFinder() {
    w320("inputSearch");
    show("divArrovInput");
    hide("articleTitle");
    show("findAncor")
}


// показать все пособие целиком
export function showAllArticle() {
    document.querySelectorAll(".headTitle").forEach(el => el.classList.remove("hide"))
    document.querySelectorAll(".sectionClass:not(#block_result)").forEach(el => el.classList.remove("hide"))
}