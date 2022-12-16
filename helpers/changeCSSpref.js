

export function w320(id) {
    document.getElementById(id).classList.add("width320")
}

//удалить класс у элемена
export function deleteClass(id, cls) {
    document.getElementById(id).classList.remove(cls)
}

export function addClass(id, cls) {
    document.getElementById(id).classList.add(cls)
}