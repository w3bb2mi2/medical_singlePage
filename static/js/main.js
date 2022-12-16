/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./helpers/changeCSSpref.js":
/*!**********************************!*\
  !*** ./helpers/changeCSSpref.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "deleteClass": () => (/* binding */ deleteClass),
/* harmony export */   "w320": () => (/* binding */ w320)
/* harmony export */ });


function w320(id) {
    document.getElementById(id).classList.add("width320")
}

//удалить класс у элемена
function deleteClass(id, cls) {
    document.getElementById(id).classList.remove(cls)
}

function addClass(id, cls) {
    document.getElementById(id).classList.add(cls)
}

/***/ }),

/***/ "./helpers/displayElement.js":
/*!***********************************!*\
  !*** ./helpers/displayElement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteActiveItem": () => (/* binding */ deleteActiveItem),
/* harmony export */   "deleteClass": () => (/* binding */ deleteClass),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "hideAll": () => (/* binding */ hideAll),
/* harmony export */   "hideInputFinder": () => (/* binding */ hideInputFinder),
/* harmony export */   "show": () => (/* binding */ show),
/* harmony export */   "showAllArticle": () => (/* binding */ showAllArticle),
/* harmony export */   "showInputFinder": () => (/* binding */ showInputFinder),
/* harmony export */   "showResults": () => (/* binding */ showResults)
/* harmony export */ });
/* harmony import */ var _changeCSSpref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeCSSpref */ "./helpers/changeCSSpref.js");
/* harmony import */ var _mainData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainData */ "./helpers/mainData.js");



 //показать элемент
function show(id) {
    document.getElementById(id).classList.remove("hide")
}

function deleteActiveItem() {
    document.querySelectorAll(".active-item").forEach(el => el.classList.remove("active-item"))
}

function hideInputFinder() {
    deleteClass("inputSearch", "width320")
    hide("divArrovInput");
    show("articleTitle")
    hide("findAncor")
}

//удалить класс у элемена
function deleteClass(id, cls) {
    document.getElementById(id).classList.remove(cls)
}


function hide(id) {
    document.getElementById(id).classList.add("hide")
}



function showResults() {
    document.getElementById("showResTrue").textContent = _mainData__WEBPACK_IMPORTED_MODULE_1__.userAnswers.right
    document.getElementById("finalList_right").textContent = _mainData__WEBPACK_IMPORTED_MODULE_1__.userAnswers.right

    document.getElementById("showResFalse").textContent = _mainData__WEBPACK_IMPORTED_MODULE_1__.userAnswers.wrong
    document.getElementById("finalList_wrong").textContent =  _mainData__WEBPACK_IMPORTED_MODULE_1__.userAnswers.wrong

    document.getElementById("showResNoAnswer").textContent = _mainData__WEBPACK_IMPORTED_MODULE_1__.userAnswers.without
    document.getElementById("finalList_noAnswer").textContent = _mainData__WEBPACK_IMPORTED_MODULE_1__.userAnswers.without
}

function hideAll() {
    deleteActiveItem()
    _mainData__WEBPACK_IMPORTED_MODULE_1__.mainImg.classList.add("hide")            //Заставка
    document.querySelector(".test_1-main")?.classList.add("hide")       //тесты
    document.getElementById("outTestblock").classList.add("hide")
    document.getElementById("footerBtn").classList.add("hide")
    document.getElementById("block_result").classList.add("hide")    //результаты теста
    document.getElementById("test12122022").classList.add("hide")    //результаты теста
}

function showInputFinder() {
    (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.w320)("inputSearch");
    show("divArrovInput");
    hide("articleTitle");
    show("findAncor")
}


// показать все пособие целиком
function showAllArticle() {
    document.querySelectorAll(".headTitle").forEach(el => el.classList.remove("hide"))
    document.querySelectorAll(".sectionClass:not(#block_result)").forEach(el => el.classList.remove("hide"))
}

/***/ }),

/***/ "./helpers/getHtmlElement.js":
/*!***********************************!*\
  !*** ./helpers/getHtmlElement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPureValue": () => (/* binding */ getPureValue)
/* harmony export */ });
function getPureValue(id) {
    return document.getElementById(id).value.replace(/[.?,0-9/\\*-+]/g, "").replace(/c/gi, "с").toLocaleLowerCase()
}


/***/ }),

/***/ "./helpers/hooks/getNodeElement.js":
/*!*****************************************!*\
  !*** ./helpers/hooks/getNodeElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getById": () => (/* binding */ getById)
/* harmony export */ });
const getById = (id) =>document.getElementById(id)

/***/ }),

/***/ "./helpers/hooks/listeners/attachListenerOnElement.js":
/*!************************************************************!*\
  !*** ./helpers/hooks/listeners/attachListenerOnElement.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachListenersOnElement": () => (/* binding */ attachListenersOnElement)
/* harmony export */ });
function attachListenersOnElement(id, functionName){
    document.getElementById(id).addEventListener("click", functionName)
}

/***/ }),

/***/ "./helpers/mainData.js":
/*!*****************************!*\
  !*** ./helpers/mainData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrArticleItems": () => (/* binding */ arrArticleItems),
/* harmony export */   "arrMenuItems": () => (/* binding */ arrMenuItems),
/* harmony export */   "btnTextQuestion1": () => (/* binding */ btnTextQuestion1),
/* harmony export */   "btnTextQuestion2": () => (/* binding */ btnTextQuestion2),
/* harmony export */   "itemsPaginate": () => (/* binding */ itemsPaginate),
/* harmony export */   "mainImg": () => (/* binding */ mainImg),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "userAnswers": () => (/* binding */ userAnswers)
/* harmony export */ });

const userAnswers = {
    right: 0,
    wrong: 0,
    without: 0
}
const title = document.getElementById("articleTitle")
const mainImg = document.querySelector(".mainImg")
const arrMenuItems = [
    "id_1", "id_2", "id_3", "id_4", "id_5", "id_6", "id_7", "id_8", "id_9", "id_10", "id_11", "id_12", "id_13", "zadaniyaEKG", "literatura"
]
const arrArticleItems = [
    "id_3", "id_4", "id_5", "id_6", "id_7", "id_8", "id_9", "id_10", "id_11", "id_12", "id_13"
]
const itemsPaginate = [
    "paginate3", "paginate4", "paginate5", "paginate6", "paginate7", "paginate8", "paginate9", "paginate10", "paginate11", "paginate12", "paginate13"
]

const btnTextQuestion1 = ["btnInputTextQuestion1_1", "btnInputTextQuestion2_1", "btnInputTextQuestion4_1", "btnInputTextQuestion5_1", "btnInputTextQuestion6_1", "btnInputTextQuestion7_1", "btnInputTextQuestion8_1", "btnInputTextQuestion9_1", "btnInputTextQuestion10_1", "btnInputTextQuestion11_1", "btnInputTextQuestion12_1"
]

const btnTextQuestion2 = [
    "btnInputTextQuestion1_2", "btnInputTextQuestion2_2", "btnInputTextQuestion4_2", "btnInputTextQuestion5_2", "btnInputTextQuestion6_2", "btnInputTextQuestion7_2", "btnInputTextQuestion8_2", "btnInputTextQuestion9_2", "btnInputTextQuestion10_2", "btnInputTextQuestion11_2", "btnInputTextQuestion12_2"
]


/***/ }),

/***/ "./helpers/questionFromText.js":
/*!*************************************!*\
  !*** ./helpers/questionFromText.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAnswer1": () => (/* binding */ checkAnswer1),
/* harmony export */   "checkAnswer2": () => (/* binding */ checkAnswer2)
/* harmony export */ });
/* harmony import */ var _getHtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getHtmlElement */ "./helpers/getHtmlElement.js");


function checkAnswer1() {


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion1_1") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion1_1")
        let totalValueLen = value.split(" ").length
        if (
            value.includes("артериал") &&
            value.includes("гипертен") &&
            totalValueLen < 5

        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // ОСТРЫЙ КОРОНАРНЫЙ СИНДРОМ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion2_1") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion2_1")
        if (
            value.includes("коронарн") &&
            value.includes("синдр")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ ОСТРОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion4_1") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion4_1")
        if (
            value.includes("от") &&
            value.includes("легк")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ ХРОНИЧЕСКОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion5_1") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion5_1")
        if (
            value.includes("сердеч") &&
            value.includes("недостато")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // АРИТМИЧЕСКИЙ СИНДРОМ
    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion6_1") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion6_1")
        if (
            value.includes("аритми")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ ЛЕГОЧНОЙ ГИПЕРТЕНЗИИ
    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion7_1") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion7_1")
        if (
            value.includes("легочн") &&
            value.includes("гипертен")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ МИТРАЛЬНОГО СТЕНОЗА

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion8_1") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion8_1")
        
        if (
            value.includes("митрал") &&
            value.includes("стеноз")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ МИТРАЛЬНОЙ НЕДОСТАТОЧНОСТИ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion9_1") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion9_1")
        
        if (
            value.includes("митрал") &&
            value.includes("стеноз")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ СТЕНОЗА УСТЬЯ АОРТЫ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion10_1") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion10_1")
        
        if (
            value.includes("стен") &&
            value.includes("усть") &&
            value.includes("аорт")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ АОРТАЛЬНОЙ НЕДОСТАТОЧНОСТИ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion11_1") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion11_1")
        
        if (
            value.includes("аортал") &&
            value.includes("недостаточ")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ ТРИКУСПИДАЛЬНОЙ НЕДОСТАТОЧНОСТИ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion12_1") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion12_1")
        
        if (
            value.includes("трикуспидал") &&
            value.includes("недостаточ")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion1").removeEventListener("click", checkAnswer1)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
}


// Второй вопрос

function checkAnswer2() {

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion1_2") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion1_2")
        if (
            value.includes("гипертонич") &&
            value.includes("криз")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
            this.previousElementSibling.previousElementSibling.disabled = true
            document.getElementById("btnInputTextQuestion2").removeEventListener("click", checkAnswer2)
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // ОСТРЫЙ КОРОНАРНЫЙ СИНДРОМ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion2_2") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion2_2")
        
        if (
            value.includes("кардиоген") &&
            value.includes("шок")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ ОСТРОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion4_2") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion4_2")
        
        if (
            value.includes("трепе") &&
            value.includes("предсерд")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ ХРОНИЧЕСКОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion5_2") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion5_2")
        
        if (
            value.includes("инфаркт")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // АРИТМИЧЕСКИЙ СИНДРОМ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion6_2") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion6_2")
        
        if (
            value.includes("фибрилля") &&
            value.includes("предсерд")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ ЛЕГОЧНОЙ ГИПЕРТЕНЗИИ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion7_2") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion7_2")
        
        if (
            value.includes("болезн") &&
            value.includes("легк") || value.includes("лёго") || value.includes("лего")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ МИТРАЛЬНОГО СТЕНОЗА


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion8_2") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion8_2")
        
        if (
            value.includes("болезн") &&
            value.includes("ревмат") &&
            value.includes("сердц")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ МИТРАЛЬНОЙ НЕДОСТАТОЧНОСТИ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion9_2") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion9_2")
        
        if (
            value.includes("недостаточн") &&
            value.includes("митрал") &&
            value.includes("клапан")

        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ СТЕНОЗА УСТЬЯ АОРТЫ

    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion10_2") {
        
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion10_2")
        
        if (
            value.includes("кальц") &&
            value.includes("створ")


        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
    // СИНДРОМ АОРТАЛЬНОЙ НЕДОСТАТОЧНОСТИ


    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion11_2") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion11_2")
        
        if (
            value.includes("нфекционн") &&
            value.includes("ндокард")

        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }

    // СИНДРОМ ТРИКУСПИДАЛЬНОЙ НЕДОСТАТОЧНОСТИ
    if (this.previousElementSibling.previousElementSibling.id == "inputTextQuestion12_2") {
        let value = (0,_getHtmlElement__WEBPACK_IMPORTED_MODULE_0__.getPureValue)("inputTextQuestion12_2")
        
        if (
            value.includes("наркома") || value.includes("наркот")
        ) {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightRed")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.disabled = true
            this.previousElementSibling.textContent = "Вы дали правильный ответ на вопрос"
        } else if (value == "") {
            this.previousElementSibling.textContent = "Вы не ответили на вопрос"
        } else {
            this.previousElementSibling.previousElementSibling.classList.remove("bg-lightGreen")
            this.previousElementSibling.previousElementSibling.classList.add("bg-lightRed")
            this.previousElementSibling.textContent = "Вы ответили не правильно"
        }
    }
}


/***/ }),

/***/ "./helpers/randerContent.js":
/*!**********************************!*\
  !*** ./helpers/randerContent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randerContent": () => (/* binding */ randerContent)
/* harmony export */ });
/* harmony import */ var _displayElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayElement */ "./helpers/displayElement.js");
/* harmony import */ var _mainData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainData */ "./helpers/mainData.js");



function randerContent() {
    
    (0,_displayElement__WEBPACK_IMPORTED_MODULE_0__.deleteActiveItem)()
    document.querySelectorAll(".headTitle").forEach(el => el.classList.add("hide"))
    _mainData__WEBPACK_IMPORTED_MODULE_1__.mainImg.classList.add("hide")
    document.getElementById("test12122022").classList.remove("hide")
    document.querySelector(".content-out").scrollTop = 0
    document.getElementById("block_result").classList.add("hide")
    document.querySelector(".test_1-main")?.classList.add("hide")
    document.getElementById("outTestblock").classList.add("hide")
    document.getElementById("footerBtn").classList.remove("hide")

    ;(0,_displayElement__WEBPACK_IMPORTED_MODULE_0__.show)("articleTitle")
    ;(0,_displayElement__WEBPACK_IMPORTED_MODULE_0__.hideInputFinder)()
    document.querySelector(".active-item")?.classList.remove("active-item")
    this?.classList?.add("active-item")
    if (this.id == 'id_1') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "СПИСОК СОКРАЩЕНИЙ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_1").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.add("hide")
    }
    if (this.id == 'id_2') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "Введение"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_2").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
    }
    if (this.id == 'id_3') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "СИНДРОМ АРТЕРИАЛЬНОЙ ГИПЕРТЕНЗИИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_3").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate3").classList.add("active-item")
    }
    if (this.id == 'id_4') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "ОСТРЫЙ КОРОНАРНЫЙ СИНДРОМ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_4").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate4").classList.add("active-item")
    }
    if (this.id == 'id_5') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "СИНДРОМ ОСТРОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_5").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate5").classList.add("active-item")
    }
    if (this.id == 'id_6') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "СИНДРОМ ХРОНИЧЕСКОЙ СЕРДЕЧНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_6").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate6").classList.add("active-item")
    }
    if (this.id == 'id_7') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "АРИТМИЧЕСКИЙ СИНДРОМ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_7").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate7").classList.add("active-item")
    }
    if (this.id == 'id_8') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "СИНДРОМ ЛЕГОЧНОЙ ГИПЕРТЕНЗИИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_8").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate8").classList.add("active-item")
    }
    if (this.id == 'id_9') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "СИНДРОМ МИТРАЛЬНОГО СТЕНОЗА"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_9").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate9").classList.add("active-item")
    }
    if (this.id == 'id_10') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "СИНДРОМ МИТРАЛЬНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_10").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate10").classList.add("active-item")
    }
    if (this.id == 'id_11') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "СИНДРОМ СТЕНОЗА УСТЬЯ АОРТЫ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_11").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate11").classList.add("active-item")
    }
    if (this.id == 'id_12') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "СИНДРОМ АОРТАЛЬНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_12").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.remove("hide")
        document.getElementById("paginate12").classList.add("active-item")
    }
    if (this.id == 'id_13') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "СИНДРОМ ТРИКУСПИДАЛЬНОЙ НЕДОСТАТОЧНОСТИ"
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_13").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.add("hide")
        document.getElementById("paginate13").classList.add("active-item")
    }
    if (this.id == 'zadaniyaEKG') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "ЗАДАНИЯ ДЛЯ САМОСТОЯТЕЛЬНОЙ РАБОТЫ (ЭКГ)"
        document.querySelector(".active-item")?.classList.remove("active-item")
        document.getElementById("test_list_item").classList.add("active-item")
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_14").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.add("hide")
        document.getElementById("footerBtn").classList.add("hide")
    }
    if (this.id == 'literatura') {
        _mainData__WEBPACK_IMPORTED_MODULE_1__.title.textContent = "РЕКОМЕНДУЕМАЯ ЛИТЕРАТУРА"
        document.querySelector(".active-item")?.classList.remove("active-item")
        document.getElementById("test_list_item").classList.add("active-item")
        document.querySelectorAll(".sectionClass").forEach(el => el.classList.add("hide"))
        document.getElementById("section_15").classList.remove("hide")
        document.getElementById("btnPriviousPage").classList.remove("hide")
        document.getElementById("btnNextPage").classList.add("hide")
        document.getElementById("footerBtn").classList.add("hide")
    }



}


/***/ }),

/***/ "./helpers/test/question36.js":
/*!************************************!*\
  !*** ./helpers/test/question36.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResQuest36": () => (/* binding */ getResQuest36)
/* harmony export */ });
/* harmony import */ var _changeCSSpref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../changeCSSpref */ "./helpers/changeCSSpref.js");
/* harmony import */ var _displayElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../displayElement */ "./helpers/displayElement.js");
/* harmony import */ var _hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/getNodeElement */ "./helpers/hooks/getNodeElement.js");




function getResQuest36() {
    if ((0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns1").innerText == 'I СТАДИЯ ХСН') {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns1","bg-green")
    } else {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns1","bg-red")
    }

    if ((0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns5").innerText == 'I СТАДИЯ ХСН') {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns5","bg-green")
    } else {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns5","bg-red")
    }

    if ((0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns9").innerText == 'I СТАДИЯ ХСН') {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns9","bg-green")
    } else {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns9","bg-red")
    }



    if ((0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns2").innerText == 'IIA СТАДИЯ ХСН') {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns2","bg-green")
    } else {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns2","bg-red")
    }

    if ((0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns6").innerText == 'IIA СТАДИЯ ХСН') {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns6","bg-green")
    } else {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns6","bg-red")
    }

    if ((0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns10").innerText == 'IIA СТАДИЯ ХСН') {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns10","bg-green")
    } else {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns10","bg-red")
    }



    if ((0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns3").innerText == 'IIБ СТАДИЯ ХСН') {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns3","bg-green")
    } else {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns3","bg-red")
    }

    if ((0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns7").innerText == 'IIБ СТАДИЯ ХСН') {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns7","bg-green")
    } else {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns7","bg-red")
    }

    if ((0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns11").innerText == 'IIБ СТАДИЯ ХСН') {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns11","bg-green")
    } else {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns11","bg-red")
    }


    if ((0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns4").innerText == 'III СТАДИЯ ХСН') {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns4","bg-green")
    } else {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns4","bg-red")
    }

    if ((0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns8").innerText == 'III СТАДИЯ ХСН') {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns8","bg-green")
    } else {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns8","bg-red")
    }

    if ((0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns12").innerText == 'III СТАДИЯ ХСН') {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns12","bg-green")
    } else {
        (0,_changeCSSpref__WEBPACK_IMPORTED_MODULE_0__.addClass)("dropAns12","bg-red")
    }




    if (
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns1").innerText == 'I СТАДИЯ ХСН' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns5").innerText == 'I СТАДИЯ ХСН' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns9").innerText == 'I СТАДИЯ ХСН' &&

        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns2").innerText == 'IIA СТАДИЯ ХСН' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns6").innerText == 'IIA СТАДИЯ ХСН' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns10").innerText == 'IIA СТАДИЯ ХСН' &&

        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns3").innerText == 'IIБ СТАДИЯ ХСН' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns7").innerText == 'IIБ СТАДИЯ ХСН' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns11").innerText == 'IIБ СТАДИЯ ХСН' &&

        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns4").innerText == 'III СТАДИЯ ХСН' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns8").innerText == 'III СТАДИЯ ХСН' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns12").innerText == 'III СТАДИЯ ХСН'

    ) {
        userAnswers.right++

    } else if (
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns1").innerText == 'Выберите правильный ответ ' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns5").innerText == 'Выберите правильный ответ ' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns9").innerText == 'Выберите правильный ответ ' &&

        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns2").innerText == 'Выберите правильный ответ ' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns6").innerText == 'Выберите правильный ответ ' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns10").innerText == 'Выберите правильный ответ ' &&

        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns3").innerText == 'Выберите правильный ответ ' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns7").innerText == 'Выберите правильный ответ ' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns11").innerText == 'Выберите правильный ответ ' &&

        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns4").innerText == 'Выберите правильный ответ ' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns8").innerText == 'Выберите правильный ответ ' &&
        (0,_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_2__.getById)("dropAns12").innerText == 'Выберите правильный ответ '
    ) {
        userAnswers.without++
    } else {
        userAnswers.wrong++
    }

    this.disabled = true
    this.nextElementSibling.disabled = false
    ;(0,_displayElement__WEBPACK_IMPORTED_MODULE_1__.showResults)()

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_mainData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/mainData */ "./helpers/mainData.js");
/* harmony import */ var _helpers_displayElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/displayElement */ "./helpers/displayElement.js");
/* harmony import */ var _helpers_randerContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/randerContent */ "./helpers/randerContent.js");
/* harmony import */ var _helpers_questionFromText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/questionFromText */ "./helpers/questionFromText.js");
/* harmony import */ var _helpers_hooks_listeners_attachListenerOnElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/hooks/listeners/attachListenerOnElement */ "./helpers/hooks/listeners/attachListenerOnElement.js");
/* harmony import */ var _helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/hooks/getNodeElement */ "./helpers/hooks/getNodeElement.js");
/* harmony import */ var _helpers_test_question36__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/test/question36 */ "./helpers/test/question36.js");
















_helpers_mainData__WEBPACK_IMPORTED_MODULE_0__.arrMenuItems.forEach(el=>(0,_helpers_hooks_listeners_attachListenerOnElement__WEBPACK_IMPORTED_MODULE_4__.attachListenersOnElement)(el, _helpers_randerContent__WEBPACK_IMPORTED_MODULE_2__.randerContent))
_helpers_mainData__WEBPACK_IMPORTED_MODULE_0__.itemsPaginate.forEach((el, index)=>(0,_helpers_hooks_listeners_attachListenerOnElement__WEBPACK_IMPORTED_MODULE_4__.attachListenersOnElement)(el, ()=>(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)(`id_${index+3}`).click()))
_helpers_mainData__WEBPACK_IMPORTED_MODULE_0__.btnTextQuestion1.forEach(el=>(0,_helpers_hooks_listeners_attachListenerOnElement__WEBPACK_IMPORTED_MODULE_4__.attachListenersOnElement)(el, _helpers_questionFromText__WEBPACK_IMPORTED_MODULE_3__.checkAnswer1))
_helpers_mainData__WEBPACK_IMPORTED_MODULE_0__.btnTextQuestion2.forEach(el=>(0,_helpers_hooks_listeners_attachListenerOnElement__WEBPACK_IMPORTED_MODULE_4__.attachListenersOnElement)(el, _helpers_questionFromText__WEBPACK_IMPORTED_MODULE_3__.checkAnswer2))
;(0,_helpers_hooks_listeners_attachListenerOnElement__WEBPACK_IMPORTED_MODULE_4__.attachListenersOnElement)("btnAnswerQuestion36", _helpers_test_question36__WEBPACK_IMPORTED_MODULE_6__.getResQuest36)
;(0,_helpers_hooks_listeners_attachListenerOnElement__WEBPACK_IMPORTED_MODULE_4__.attachListenersOnElement)("btnNextPage", next)


function next() {
    let activeElement = document.querySelector(".active-item")

    if (activeElement.id == "id_12") {
        this.classList.add("hide")
    }
    activeElement?.classList?.remove("active-item")
    let nextElement = activeElement?.nextElementSibling
    nextElement?.classList.add("active-item")
    nextElement?.click()
    
}

 (0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("btnPriviousPage").addEventListener('click', previous)


function previous() {
    let activeElement = document.querySelector(".active-item")

    activeElement?.classList?.remove("active-item")
    let prevElement = activeElement?.previousElementSibling
    prevElement?.classList.add("active-item")
    prevElement?.click()
}


function hideMainImg(){
    (0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("divImageMain").classList.add("animate__bounceOutRight")
}


 (0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("TESTOVYE_ZADANIYA").addEventListener("click", showTests)

function showTests() {
    _helpers_mainData__WEBPACK_IMPORTED_MODULE_0__.mainImg.classList.add("hide")
    document.querySelector(".active-item")?.classList.remove("active-item")
    ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("test_list_item").classList.add("active-item")
    timeStartTesting = new Date();
    
    _helpers_mainData__WEBPACK_IMPORTED_MODULE_0__.title.textContent = "Тестовые задания"
    ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("block_result").classList.remove("hide")
    ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("footerBtn").classList.add("hide")

    ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("outTestblock").classList.remove("hide")
    document.querySelector("#test12122022")?.classList.add("hide")

}

document.querySelectorAll(".btnNext:not(#finish_test)").forEach(btn => {
    btn.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.classList.add("hide")
        this.parentElement.parentElement.parentElement.nextElementSibling.classList.remove("hide")
    })
})

document.querySelectorAll(".btnLast").forEach(btn => {
    btn.addEventListener("click", function () {

        this.parentElement.parentElement.parentElement.classList.add("hide")
        this.parentElement.parentElement.parentElement.previousElementSibling.classList.remove("hide")
    })
})

 ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("finish_test").addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.add("hide")
    this.parentElement.parentElement.parentElement.nextElementSibling.classList.remove("hide")
    timeFinishTesting = new Date();
    let current = (timeFinishTesting - timeStartTesting) / 1000 / 60
    let roundTime = Math.round(current)
    ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("finalList_time").textContent = `${roundTime} мин.`
})



document.querySelectorAll(".answer").forEach(el => {
    el.addEventListener("click", function (e) {
        let input = e.currentTarget.querySelector("input")


        if (input?.type == "radio") {
            input.closest("ul").querySelectorAll("input").forEach(el => {
                el.checked = false
            })
            input.checked = false
            el.querySelectorAll("input").forEach(input => {
                input.disabled = true;
            })
            e.target.parentElement.querySelector("input").checked = true
            e.target.parentElement.querySelector("input").disabled = false
        }
        if (input?.type == "checkbox") {
            
        }
    })

})


document.querySelector(".question-36").querySelectorAll(".question-36-item").forEach(el => {
    el.addEventListener("click", function (e) {
        let text = this.innerText
        let menu = this.closest("ul")
        menu.classList.remove("show")
        const btn = menu.previousElementSibling
        btn.innerText = text

    })
})





let timeStartTesting;
let timeFinishTesting;

document.querySelectorAll(".btnAnswer:not(#btnAnswerQuestion36):not(.btnInputTextQuestion)").forEach(btn => {
    btn.addEventListener("click", function (e) {
        let allinputs = this.closest(".question ")?.querySelectorAll("input")
        let allQuestions = 0;   //всего вопросов
        let raghtAnswerInQuestion = 0;
        let isAnswer = 0;       //отвечено
        let isRight = 0;        //отвечено правильно
        let isWrong = 0;        //отвечено правильно
        let radioInp = false;
        for (let i = 0; i < allinputs.length; i++) {
            if (allinputs[i].type == "radio") {
                radioInp = true;
                if (allinputs[i].dataset.answer == "x") {
                    allinputs[i].parentElement.querySelector("p")?.classList?.add("right")
                    allinputs[i].classList?.add("right")
                    if (allinputs[i].checked) {
                        _helpers_mainData__WEBPACK_IMPORTED_MODULE_0__.userAnswers.right++
                        isAnswer++

                    }
                } else {
                    allinputs[i].parentElement.querySelector("p")?.classList?.add("error")
                    if (allinputs[i].checked) {
                        isAnswer++
                        _helpers_mainData__WEBPACK_IMPORTED_MODULE_0__.userAnswers.wrong++

                    }
                }
            } else if (allinputs[i].type == "checkbox") {

                if (allinputs[i].dataset.answer) {
                    raghtAnswerInQuestion++;
                    allinputs[i].parentElement.classList.add("right")
                    if (allinputs[i].checked) {           //привильные ответы
                        isRight++
                        isAnswer++
                    } else {                                //не правильные ответы

                    }
                } else {
                    allinputs[i].parentElement.classList.add("error")
                    if (allinputs[i].checked) {
                        isWrong++
                        isAnswer++
                    }
                }
            }


        }


        if (!isAnswer) {
            _helpers_mainData__WEBPACK_IMPORTED_MODULE_0__.userAnswers.without++
        }else
        if (isWrong >= 1 && isAnswer!=0 || isRight != raghtAnswerInQuestion &&  isAnswer!=0) {
            _helpers_mainData__WEBPACK_IMPORTED_MODULE_0__.userAnswers.wrong++
        }
        if (isRight == raghtAnswerInQuestion && isWrong == 0 && !radioInp) {
            _helpers_mainData__WEBPACK_IMPORTED_MODULE_0__.userAnswers.right++
        }
        btn.disabled = true

        btn.nextElementSibling.disabled = false
        ;(0,_helpers_displayElement__WEBPACK_IMPORTED_MODULE_1__.showResults)()
    })


})




let arrAncor = []

 ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("findAncor").addEventListener("click", finder)

let originalNode = [];
let arrID;

function finder() {
    arrID = []
    ;(0,_helpers_displayElement__WEBPACK_IMPORTED_MODULE_1__.hideAll)()
    ;(0,_helpers_displayElement__WEBPACK_IMPORTED_MODULE_1__.showAllArticle)()
    getOriginlNodes()

    ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("test12122022").classList.remove("hide")


    let str = (0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("inputSearch").value
    if(str.length<3)return
    let textP = (0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("test12122022").querySelectorAll('p')
    let textH6 = (0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("test12122022").querySelectorAll('h6')
    let textLI = (0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("test12122022").querySelectorAll('li')
    var re = new RegExp(str, "i");
    for (let i = 0; i < textP.length; i++) {
        if (textP[i].innerText.toLowerCase().includes(str.toLowerCase())) {
            let incl = textP[i].innerText.toLowerCase().indexOf(str.toLowerCase())

            originalNode.push(textP[i])

           
            let p = textP[i].innerText.replace(textP[i].innerText.slice(incl, incl + str.length), `<span class="bg-lightRed markedSpan" id="ancor_P${i}">${textP[i].innerText.slice(incl, incl + str.length)}</span>`)

            textP[i].innerHTML = p
            let ref = `
            <a href="#ancor_P${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>
            `
            ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("divForRef").insertAdjacentHTML("beforeend", ref)
            arrID.push(`ancorRef${i}`)
        }
    }

    for (let i = 0; i < textH6.length; i++) {
        if (textH6[i].innerText.toLowerCase().includes(str.toLowerCase())) {
            let incl = textH6[i].innerText.toLowerCase().indexOf(str.toLowerCase())
            originalNode.push(textH6[i])
            
            
            let p = textH6[i].innerText.replace(textH6[i].innerText.slice(incl, incl + str.length), `<span class="bg-lightRed markedSpan" id="ancor_H6${i}">${textH6[i].innerText.slice(incl, incl + str.length)}</span>`)
            textH6[i].innerHTML = p
            let ref = `
            <a href="#ancor_H6${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>
            `
            ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("divForRef").insertAdjacentHTML("beforeend", ref)
            arrID.push(`ancorRef${i}`)


        }
        for (let i = 0; i < textLI.length; i++) {
            if (textLI[i].innerText.toLowerCase().includes(str.toLowerCase())) {
                let incl = textLI[i].innerText.toLowerCase().indexOf(str.toLowerCase())
                
                originalNode.push(textLI[i])
                
                let p = textLI[i].innerText.replace(textLI[i].innerText.slice(incl, incl + str.length), `<span class="bg-lightRed markedSpan" id="ancor_Li${i}">${textLI[i].innerText.slice(incl, incl + str.length)}</span>`)
                textLI[i].innerHTML = p
                let ref = `
                <a href="#ancor_Li${i}" id="ancorRef${i}" class='ancorA'>ссылка${i}</a>
                `
                ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("divForRef").insertAdjacentHTML("beforeend", ref)
                arrID.push(`ancorRef${i}`)
    
    
            }}
    }
    countElemsFinded()
    
    ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)(arrID[0])?.classList.add("activeRef")

    setTimeout(() => {
        ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)(arrID[0]).click()
    }, 0);
}

//вперед назад по найденным элементам+их колличество


function countElemsFinded() {
    let count = document.querySelectorAll(".ancorA").length

    ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("countRes").textContent = count;
}

 (0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("countResForvard").addEventListener("click", nextClickFind)

let idCount = 0
function nextClickFind() {
    let currentEl = document.querySelector(".activeRef")
    let nextEl = currentEl?.nextElementSibling
    if(!nextEl || !currentEl)return
    currentEl?.classList.remove("activeRef")
    nextEl?.classList.add("activeRef")
    setTimeout(() => {
        if(nextEl.classList.contains("ancorA")){
            nextEl?.nextElementSibling.click()
        }
    }, 0)

}

 (0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("countResBack").addEventListener("click", previousClickFind)
function previousClickFind() {
    let currentEl = document.querySelector(".activeRef")
    let prevElem = currentEl?.previousElementSibling
    if(!prevElem)return
    currentEl.classList.remove("activeRef")
    prevElem?.classList.add("activeRef")
    setTimeout(() => {
        prevElem?.nextElementSibling.click()
    }, 0)

}

function getOriginlNodes() {
    (0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("divForRef").remove()
    ;(0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("blockInputSearch").insertAdjacentHTML("afterbegin", `<div id="divForRef" class="hide"></div>`)
    originalNode.forEach(el => {
        el.innerHTML = el.textContent
    })
}


function deleteAncorTegs() {
    document.querySelectorAll(".ancorFinded").forEach(el => {
        console.log(el)
    })
}



 (0,_helpers_hooks_getNodeElement__WEBPACK_IMPORTED_MODULE_5__.getById)("inputSearch").addEventListener("click", _helpers_displayElement__WEBPACK_IMPORTED_MODULE_1__.showInputFinder)







function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода

}


})();

/******/ })()
;
//# sourceMappingURL=main.js.map