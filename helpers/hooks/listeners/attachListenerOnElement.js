export function attachListenersOnElement(id, functionName){
    document.getElementById(id).addEventListener("click", functionName)
}