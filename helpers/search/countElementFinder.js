import { getById } from "../hooks/getNodeElement";

export function countElemsFinded() {
    let count = document.querySelectorAll(".ancorA").length

    getById("countRes").textContent = count;
}