import { hideAll, showAllArticle } from "../displayElement"
import { getOriginlNodes } from "./getOriginalNode"
import { searchigData } from "../mainData"
import { getById } from "../hooks/getNodeElement"
import { countElemsFinded } from "./countElementFinder"
import { resetSearch } from "./resetSearch"

export function finder() {
    searchigData.arrayId = []
    hideAll()
    showAllArticle()
    // getOriginlNodes() //удалили все спаны на странице
    resetSearch()

    getById("test12122022").classList.remove("hide")
    getById("divForRef").remove();
    getById("blockInputSearch").insertAdjacentHTML("afterbegin", `<div id="divForRef" class="hide"></div>`)

    let str = getById("inputSearch").value

    if(str.length<3)return
    
    // let regex = `/${str}/`
    let regex = new RegExp(str,"gi","g");
    console.log(regex)
    const len = str.length
    const textP = getById("test12122022").querySelectorAll('p')
    const textH6 = getById("test12122022").querySelectorAll('h6')
    const textLI = getById("test12122022").querySelectorAll('li')
    const allHtmlElems = [...textP, ...textH6, ...textLI];
    // allHtmlElems.concat(textP).concat(textH6).concat(textLI)
    console.log(allHtmlElems)
    
    for (let i = 0; i < allHtmlElems.length; i++) {
        if (allHtmlElems[i].innerHTML.match(eval(regex))) {
            const arrEquels = allHtmlElems[i].innerHTML.match(eval(regex))
            for(let j = 0; j<arrEquels.length; j++){
                allHtmlElems[i].innerHTML=allHtmlElems[i].innerText.replace(arrEquels[j], `<span class="bg-lightRed markedSpan" id="ancor_${i}">${arrEquels[j]}</span>`)
            }
          
            let ref = `
            <a href="#ancor_${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>
            `
            getById("divForRef").insertAdjacentHTML("beforeend", ref)
            searchigData.arrayId.push(`ancorRef${i}`)
            console.log(searchigData.arrayId)
            // const start = allHtmlElems[i].innerText.match(eval(regex))
            // console.log("allHtmlElems[i].innerText.match(eval(regex)", start)

            
            // console.log("allHtmlElems[i].innerText.slice(start, len)", allHtmlElems[i].innerText.slice(start, len))
            // console.log("allHtmlElems[i]",allHtmlElems[i])
            // allHtmlElems[i].innerHTML = allHtmlElems[i].innerHTML.replace(regex, )

            
            // let incl = textP[i].innerText.toLowerCase().indexOf(str.toLowerCase())

            // searchigData.originalNode.push(textP[i])
            // console.log(searchigData.originalNode)
           
            // let p = textP[i].innerText.replace(textP[i].innerText.slice(incl, incl + str.length), `<span class="bg-lightRed markedSpan" id="ancor_P${i}">${textP[i].innerText.slice(incl, incl + str.length)}</span>`)

            // textP[i].innerHTML = p
            // let ref = `
            // <a href="#ancor_P${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>
            // `
            // getById("divForRef").insertAdjacentHTML("beforeend", ref)
            // searchigData.arrayId.push(`ancorRef${i}`)
        }
    }

    // for (let i = 0; i < textH6.length; i++) {
    //     if (textH6[i].innerText.toLowerCase().includes(str.toLowerCase())) {
    //         let incl = textH6[i].innerText.toLowerCase().indexOf(str.toLowerCase())
    //         searchigData.originalNode.push(textH6[i])
            
    //         console.log(searchigData.originalNode)
    //         let p = textH6[i].innerText.replace(textH6[i].innerText.slice(incl, incl + str.length), `<span class="bg-lightRed markedSpan" id="ancor_H6${i}">${textH6[i].innerText.slice(incl, incl + str.length)}</span>`)
    //         textH6[i].innerHTML = p
    //         let ref = `
    //         <a href="#ancor_H6${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>
    //         `
    //         getById("divForRef").insertAdjacentHTML("beforeend", ref)
    //         searchigData.arrayId.push(`ancorRef${i}`)


    //     }
    //     for (let i = 0; i < textLI.length; i++) {
    //         if (textLI[i].innerText.toLowerCase().includes(str.toLowerCase())) {
    //             let incl = textLI[i].innerText.toLowerCase().indexOf(str.toLowerCase())
                
    //             searchigData.originalNode.push(textLI[i])
    //             console.log(searchigData.originalNode)
    //             let p = textLI[i].innerText.replace(textLI[i].innerText.slice(incl, incl + str.length), `<span class="bg-lightRed markedSpan" id="ancor_Li${i}">${textLI[i].innerText.slice(incl, incl + str.length)}</span>`)
    //             textLI[i].innerHTML = p
    //             let ref = `
    //             <a href="#ancor_Li${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>
    //             `
    //             getById("divForRef").insertAdjacentHTML("beforeend", ref)
    //             searchigData.arrayId.push(`ancorRef${i}`)
    
    
    //         }}
    // }
    countElemsFinded()
    
    getById(searchigData.arrayId[0])?.classList.add("activeRef")

    setTimeout(() => {
        getById(searchigData.arrayId[0]).click()
    }, 0);
}

