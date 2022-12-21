import { hideAllElems } from "./hideAllElem";
import { show } from "./showSingle";

export function showSelectBlock(id){
    hideAllElems()
    show(id) 
}