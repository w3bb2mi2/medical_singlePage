import { hideAllElems } from "../display/hideAllElem";
import { show } from "../display/showSingle";
import { getById } from "../hooks/getNodeElement";
import { timeTesting } from "../mainData";

export function showTests() {
    document.querySelector(".active-item")?.classList.remove("active-item")
    getById("test_list_item").classList.add("active-item")
    timeTesting.start = new Date();
    getById("articleTitle").textContent = "Тестовые задания"
    hideAllElems()
    show("outTestblock")
    show("block_result")  
    show("articleTitle")  

}