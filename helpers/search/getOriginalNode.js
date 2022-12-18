import { getById } from "../hooks/getNodeElement"
import { searchigData } from "../mainData"
export function getOriginlNodes() {
    getById("divForRef").remove()
    getById("blockInputSearch").insertAdjacentHTML("afterbegin", `<div id="divForRef" class="hide"></div>`)
    if (searchigData.originalNode.length == 0) return
    searchigData.originalNode?.originalNode.forEach(el => {
        el.innerHTML = el.textContent
    })
}