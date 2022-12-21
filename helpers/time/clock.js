import { getById } from "../hooks/getNodeElement";
import { timeForTest } from "../mainData";

var out = getById("clock")
var start = document.getElementById('strt');
var stop = document.getElementById('stp');
var reset = document.getElementById('rst');
var sec = 0;
var min = 0;
var hrs = 0;
var t;


function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    out.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
export function timer() {
    timeForTest.time = setTimeout(add, 1000);
}
export function stopClock(){
    clearTimeout(timeForTest.time)
}
