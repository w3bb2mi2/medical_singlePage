export function getPureValue(id) {
    return document.getElementById(id).value.replace(/[.?,0-9/\\*-+]/g, "").replace(/c/gi, "с").toLocaleLowerCase()
}
