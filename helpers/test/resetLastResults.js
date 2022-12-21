// Очистка всех инпутов перед началом нового теста

export function resetLastResults(){
    document.querySelectorAll("input").forEach(el=>{
        el.checked=false
    })
    document.querySelectorAll(".btnAnswer").forEach(el=>{
        el.disabled=false
    })
    document.querySelectorAll(".error").forEach(el=>{
        el.classList.remove("error")
    })
    document.querySelectorAll(".right").forEach(el=>{
        el.classList.remove("right")
    })
    
}