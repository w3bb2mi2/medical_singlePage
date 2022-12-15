import { timeFinishTesting, timeStartTesting } from "../mainData";


export const finish = () => document.getElementById("finish_test").addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.add("hide")
    this.parentElement.parentElement.parentElement.nextElementSibling.classList.remove("hide")
    timeFinishTesting = new Date();
    let current = (timeFinishTesting - timeStartTesting) / 1000 / 60
    let roundTime = Math.round(current)
    document.getElementById("finalList_time").textContent = `${roundTime} мин.`
})