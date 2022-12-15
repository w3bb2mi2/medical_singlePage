import { deleteActiveItem, hideInputFinder, show } from "./displayElement"
import { mainImg, title } from "./mainData"

export function randerContent() {
    
    deleteActiveItem()
    document.querySelectorAll(".headTitle").forEach(el => el.classList.add("hide"))
    mainImg.classList.add("hide")
    document.getElementById("test12122022").classList.remove("hide")
    document.querySelector(".content-out").scrollTop = 0
    document.getElementById("block_result").classList.add("hide")
    document.querySelector(".test_1-main")?.classList.add("hide")
    document.getElementById("outTestblock").classList.add("hide")
    document.getElementById("footerBtn").classList.remove("hide")

    show("articleTitle")
    hideInputFinder()
    document.querySelector(".active-item")?.classList.remove("active-item")
    this?.classList?.add("active-item")
    if (this.id == 'id_1') {
        title.textContent = "СПИСОК СОКРАЩЕНИЙ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_1").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.add("hide")
    }
    if (this.id == 'id_2') {
        title.textContent = "Введение"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_2").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
    }
    if (this.id == 'id_3') {
        title.textContent = "СИНДРОМ АРТЕРИАЛЬНОЙ ГИПЕРТЕНЗИИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_3").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate3").classList.add("active-item")
    }
    if (this.id == 'id_4') {
        title.textContent = "ОСТРЫЙ КОРОНАРНЫЙ СИНДРОМ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_4").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate4").classList.add("active-item")
    }
    if (this.id == 'id_5') {
        title.textContent = "СИНДРОМ ОСТРОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_5").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate5").classList.add("active-item")
    }
    if (this.id == 'id_6') {
        title.textContent = "СИНДРОМ ХРОНИЧЕСКОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_6").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate6").classList.add("active-item")
    }
    if (this.id == 'id_7') {
        title.textContent = "АРИТМИЧЕСКИЙ СИНДРОМ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_7").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate7").classList.add("active-item")
    }
    if (this.id == 'id_8') {
        title.textContent = "СИНДРОМ ЛЕГОЧНОЙ ГИПЕРТЕНЗИИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_8").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate8").classList.add("active-item")
    }
    if (this.id == 'id_9') {
        title.textContent = "СИНДРОМ МИТРАЛЬНОГО СТЕНОЗА"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_9").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate9").classList.add("active-item")
    }
    if (this.id == 'id_10') {
        title.textContent = "СИНДРОМ МИТРАЛЬНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_10").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate10").classList.add("active-item")
    }
    if (this.id == 'id_11') {
        title.textContent = "СИНДРОМ СТЕНОЗА УСТЬЯ АОРТЫ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_11").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate11").classList.add("active-item")
    }
    if (this.id == 'id_12') {
        title.textContent = "СИНДРОМ АОРТАЛЬНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_12").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate12").classList.add("active-item")
    }
    if (this.id == 'id_13') {
        title.textContent = "СИНДРОМ ТРИКУСПИДАЛЬНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_13").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.add("hide")
        document.getElementById("paginate13").classList.add("active-item")
    }
    if (this.id == 'zadaniyaEKG') {
        title.textContent = "ЗАДАНИЯ ДЛЯ САМОСТОЯТЕЛЬНОЙ РАБОТЫ (ЭКГ)"
        document.querySelector(".active-item")?.classList.remove("active-item")
        document.getElementById("test_list_item").classList.add("active-item")
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_14").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.add("hide")
        document.getElementById("footerBtn").classList.add("hide")
    }
    if (this.id == 'literatura') {
        title.textContent = "РЕКОМЕНДУЕМАЯ ЛИТЕРАТУРА"
        document.querySelector(".active-item")?.classList.remove("active-item")
        document.getElementById("test_list_item").classList.add("active-item")
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_15").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.add("hide")
        document.getElementById("footerBtn").classList.add("hide")
    }



}
