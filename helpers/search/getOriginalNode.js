import { getById } from "../hooks/getNodeElement"

export function getOriginlNodes() {
    getById("divForRef").remove()
    getById("blockInputSearch").insertAdjacentHTML("afterbegin", `<div id="divForRef" class="hide"></div>`)
    originalNode.forEach(el => {
        el.innerHTML = el.textContent
    })
}