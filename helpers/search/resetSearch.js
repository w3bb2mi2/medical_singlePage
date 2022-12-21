
export function resetSearch(){
    let array = document.querySelectorAll(".markedSpan")
    array.forEach(el=>{
        try {
            el.parentElement.innerHTML = el.parentElement.textContent
        } catch (error) {
            
        }
    })
}