import {  showAllArticle } from "../displayElement"
import { searchigData } from "../mainData"
import { getById } from "../hooks/getNodeElement"
import { countElemsFinded } from "./countElementFinder"
import { resetSearch } from "./resetSearch"
import { hideAllElems } from "../display/hideAllElem"
import { show } from "../display/showSingle"

export function finder() {
    searchigData.arrayId = []
    hideAllElems()
    showAllArticle()
    resetSearch()
    show("arrovLinkId")
    show("divInpuHead") 
    getById("test12122022").classList.remove("hide")
    getById("divForRef").innerHTML = ""

    let str = getById("inputSearch").value

    if(str.length<3)return
    let regex = new RegExp(str,"gi");
    const textP = getById("test12122022").querySelectorAll('p')
    const textH6 = getById("test12122022").querySelectorAll('h6')
    const textLI = getById("test12122022").querySelectorAll('li')
    const allHtmlElems = [...textP, ...textH6, ...textLI];
    for (let i = 0; i < allHtmlElems.length; i++) {
        if (allHtmlElems[i].innerHTML.match(eval(regex))) {
            let arrEquels = allHtmlElems[i].innerText.match(eval(regex));
            for(let j = 0; j<arrEquels.length; j++){
                allHtmlElems[i].innerHTML=allHtmlElems[i].innerText.replaceAll(arrEquels[j], `<span class="bg-lightRed markedSpan" id="ancor_${i}">${arrEquels[j]}</span>`)
            }
            let ref = `<a href="#ancor_${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>`
            getById("divForRef").insertAdjacentHTML("beforeend", ref)
            searchigData.arrayId.push(`ancorRef${i}`)
        }
    }

    countElemsFinded()
    
    getById(searchigData.arrayId[0])?.classList.add("activeRef")

    setTimeout(() => {
        getById(searchigData.arrayId[0]).click()
    }, 0);
}

