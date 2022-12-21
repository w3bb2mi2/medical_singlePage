import { showAllArticle } from "../displayElement"
import { getOriginlNodes } from "./getOriginalNode"
import { searchigData } from "../mainData"
import { getById } from "../hooks/getNodeElement"
import { countElemsFinded } from "./countElementFinder"
import { hideAllElems } from "../display/hideAllElem"

export function finder() {
    searchigData.arrayId = []
    hideAllElems()
    showAllArticle()
    getOriginlNodes()

    getById("test12122022").classList.remove("hide")


    let str = getById("inputSearch").value

    if(str.length<3)return
    let textP = getById("test12122022").querySelectorAll('p')
    let textH6 = getById("test12122022").querySelectorAll('h6')
    let textLI = getById("test12122022").querySelectorAll('li')
    var re = new RegExp(str, "i");
    for (let i = 0; i < textP.length; i++) {
        if (textP[i].innerText.toLowerCase().includes(str.toLowerCase())) {
            let incl = textP[i].innerText.toLowerCase().indexOf(str.toLowerCase())

            searchigData.originalNode.push(textP[i])
            console.log(searchigData.originalNode)
           
            let p = textP[i].innerText.replace(textP[i].innerText.slice(incl, incl + str.length), `<span class="bg-lightRed markedSpan" id="ancor_P${i}">${textP[i].innerText.slice(incl, incl + str.length)}</span>`)

            textP[i].innerHTML = p
            let ref = `
            <a href="#ancor_P${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>
            `
            getById("divForRef").insertAdjacentHTML("beforeend", ref)
            searchigData.arrayId.push(`ancorRef${i}`)
        }
    }

    for (let i = 0; i < textH6.length; i++) {
        if (textH6[i].innerText.toLowerCase().includes(str.toLowerCase())) {
            let incl = textH6[i].innerText.toLowerCase().indexOf(str.toLowerCase())
            searchigData.originalNode.push(textH6[i])
            
            console.log(searchigData.originalNode)
            let p = textH6[i].innerText.replace(textH6[i].innerText.slice(incl, incl + str.length), `<span class="bg-lightRed markedSpan" id="ancor_H6${i}">${textH6[i].innerText.slice(incl, incl + str.length)}</span>`)
            textH6[i].innerHTML = p
            let ref = `
            <a href="#ancor_H6${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>
            `
            getById("divForRef").insertAdjacentHTML("beforeend", ref)
            searchigData.arrayId.push(`ancorRef${i}`)


        }
        for (let i = 0; i < textLI.length; i++) {
            if (textLI[i].innerText.toLowerCase().includes(str.toLowerCase())) {
                let incl = textLI[i].innerText.toLowerCase().indexOf(str.toLowerCase())
                
                searchigData.originalNode.push(textLI[i])
                console.log(searchigData.originalNode)
                let p = textLI[i].innerText.replace(textLI[i].innerText.slice(incl, incl + str.length), `<span class="bg-lightRed markedSpan" id="ancor_Li${i}">${textLI[i].innerText.slice(incl, incl + str.length)}</span>`)
                textLI[i].innerHTML = p
                let ref = `
                <a href="#ancor_Li${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>
                `
                getById("divForRef").insertAdjacentHTML("beforeend", ref)
                searchigData.arrayId.push(`ancorRef${i}`)
    
    
            }}
    }
    countElemsFinded()
    
    getById(arrayId[0])?.classList.add("activeRef")

    setTimeout(() => {
        getById(searchigData.arrayId[0]).click()
    }, 0);
}

