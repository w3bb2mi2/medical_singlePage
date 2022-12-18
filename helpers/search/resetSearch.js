
export function resetSearch(){
    let array = document.querySelectorAll(".markedSpan")
    array.forEach(el=>{
        console.log(el.parentElement.textContent)
        el.parentElement.innerHTML = el.parentElement.textContent
    })
}