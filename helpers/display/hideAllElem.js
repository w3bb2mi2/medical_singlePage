import { deleteActiveItem, hide } from "../displayElement"
import { mainImg } from "../mainData"

export function hideAllElems() {
    deleteActiveItem()
    mainImg.classList.add("hide")            //Заставка
    hide(".test_1-main")       //тесты
    hide("outTestblock")
    hide("footerBtn")
    hide("block_result")    //результаты теста
    hide("test12122022")   
    hide("controlTestId") 
    
}