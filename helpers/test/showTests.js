import { hideAllElems } from "../display/hideAllElem";
import { show } from "../display/showSingle";
import { getById } from "../hooks/getNodeElement";
import { timeTesting } from "../mainData";
import { stopClock, timer } from "../time/clock";

export function showTests() {
    stopClock()
    getById("timer").textContent = ""
    getById("timer").classList.remove("hide")
    timer()
    document.querySelector(".active-item")?.classList.remove("active-item")
    getById("test_list_item").classList.add("active-item")
    timeTesting.start = new Date();
    getById("articleTitle").textContent = "Тестовые задания"
    hideAllElems()
    show("outTestblock")
    show("block_result")  
    show("articleTitle")  

}