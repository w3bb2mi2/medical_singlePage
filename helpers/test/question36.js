import { addClass } from "../changeCSSpref"
import { showResults } from "../displayElement"
import { getById } from "../hooks/getNodeElement"

export function getResQuest36() {
    if (getById("dropAns1").innerText == 'I СТАДИЯ ХСН') {
        addClass("dropAns1","bg-green")
    } else {
        addClass("dropAns1","bg-red")
    }

    if (getById("dropAns5").innerText == 'I СТАДИЯ ХСН') {
        addClass("dropAns5","bg-green")
    } else {
        addClass("dropAns5","bg-red")
    }

    if (getById("dropAns9").innerText == 'I СТАДИЯ ХСН') {
        addClass("dropAns9","bg-green")
    } else {
        addClass("dropAns9","bg-red")
    }



    if (getById("dropAns2").innerText == 'IIA СТАДИЯ ХСН') {
        addClass("dropAns2","bg-green")
    } else {
        addClass("dropAns2","bg-red")
    }

    if (getById("dropAns6").innerText == 'IIA СТАДИЯ ХСН') {
        addClass("dropAns6","bg-green")
    } else {
        addClass("dropAns6","bg-red")
    }

    if (getById("dropAns10").innerText == 'IIA СТАДИЯ ХСН') {
        addClass("dropAns10","bg-green")
    } else {
        addClass("dropAns10","bg-red")
    }



    if (getById("dropAns3").innerText == 'IIБ СТАДИЯ ХСН') {
        addClass("dropAns3","bg-green")
    } else {
        addClass("dropAns3","bg-red")
    }

    if (getById("dropAns7").innerText == 'IIБ СТАДИЯ ХСН') {
        addClass("dropAns7","bg-green")
    } else {
        addClass("dropAns7","bg-red")
    }

    if (getById("dropAns11").innerText == 'IIБ СТАДИЯ ХСН') {
        addClass("dropAns11","bg-green")
    } else {
        addClass("dropAns11","bg-red")
    }


    if (getById("dropAns4").innerText == 'III СТАДИЯ ХСН') {
        addClass("dropAns4","bg-green")
    } else {
        addClass("dropAns4","bg-red")
    }

    if (getById("dropAns8").innerText == 'III СТАДИЯ ХСН') {
        addClass("dropAns8","bg-green")
    } else {
        addClass("dropAns8","bg-red")
    }

    if (getById("dropAns12").innerText == 'III СТАДИЯ ХСН') {
        addClass("dropAns12","bg-green")
    } else {
        addClass("dropAns12","bg-red")
    }




    if (
        getById("dropAns1").innerText == 'I СТАДИЯ ХСН' &&
        getById("dropAns5").innerText == 'I СТАДИЯ ХСН' &&
        getById("dropAns9").innerText == 'I СТАДИЯ ХСН' &&

        getById("dropAns2").innerText == 'IIA СТАДИЯ ХСН' &&
        getById("dropAns6").innerText == 'IIA СТАДИЯ ХСН' &&
        getById("dropAns10").innerText == 'IIA СТАДИЯ ХСН' &&

        getById("dropAns3").innerText == 'IIБ СТАДИЯ ХСН' &&
        getById("dropAns7").innerText == 'IIБ СТАДИЯ ХСН' &&
        getById("dropAns11").innerText == 'IIБ СТАДИЯ ХСН' &&

        getById("dropAns4").innerText == 'III СТАДИЯ ХСН' &&
        getById("dropAns8").innerText == 'III СТАДИЯ ХСН' &&
        getById("dropAns12").innerText == 'III СТАДИЯ ХСН'

    ) {
        userAnswers.right++

    } else if (
        getById("dropAns1").innerText == 'Выберите правильный ответ ' &&
        getById("dropAns5").innerText == 'Выберите правильный ответ ' &&
        getById("dropAns9").innerText == 'Выберите правильный ответ ' &&

        getById("dropAns2").innerText == 'Выберите правильный ответ ' &&
        getById("dropAns6").innerText == 'Выберите правильный ответ ' &&
        getById("dropAns10").innerText == 'Выберите правильный ответ ' &&

        getById("dropAns3").innerText == 'Выберите правильный ответ ' &&
        getById("dropAns7").innerText == 'Выберите правильный ответ ' &&
        getById("dropAns11").innerText == 'Выберите правильный ответ ' &&

        getById("dropAns4").innerText == 'Выберите правильный ответ ' &&
        getById("dropAns8").innerText == 'Выберите правильный ответ ' &&
        getById("dropAns12").innerText == 'Выберите правильный ответ '
    ) {
        userAnswers.without++
    } else {
        userAnswers.wrong++
    }

    this.disabled = true
    this.nextElementSibling.disabled = false
    showResults()

}