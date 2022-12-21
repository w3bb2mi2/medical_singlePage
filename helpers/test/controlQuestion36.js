import { addClass } from "../changeCSSpref"
import { getById } from "../hooks/getNodeElement"
import { userAnswersControlTest } from "../mainData"
import { nextControlTestQuestion } from "./controlTest"

export function getResQuest36control() {
    if (getById("cont_dropAns1").innerText == 'I СТАДИЯ ХСН') {
        addClass("cont_dropAns1","bg-green")
    } else {
        addClass("cont_dropAns1","bg-red")
    }

    if (getById("cont_dropAns5").innerText == 'I СТАДИЯ ХСН') {
        addClass("cont_dropAns5","bg-green")
    } else {
        addClass("cont_dropAns5","bg-red")
    }

    if (getById("cont_dropAns9").innerText == 'I СТАДИЯ ХСН') {
        addClass("cont_dropAns9","bg-green")
    } else {
        addClass("cont_dropAns9","bg-red")
    }



    if (getById("cont_dropAns2").innerText == 'IIA СТАДИЯ ХСН') {
        addClass("cont_dropAns2","bg-green")
    } else {
        addClass("cont_dropAns2","bg-red")
    }

    if (getById("cont_dropAns6").innerText == 'IIA СТАДИЯ ХСН') {
        addClass("cont_dropAns6","bg-green")
    } else {
        addClass("cont_dropAns6","bg-red")
    }

    if (getById("cont_dropAns10").innerText == 'IIA СТАДИЯ ХСН') {
        addClass("cont_dropAns10","bg-green")
    } else {
        addClass("cont_dropAns10","bg-red")
    }



    if (getById("cont_dropAns3").innerText == 'IIБ СТАДИЯ ХСН') {
        addClass("cont_dropAns3","bg-green")
    } else {
        addClass("cont_dropAns3","bg-red")
    }

    if (getById("cont_dropAns7").innerText == 'IIБ СТАДИЯ ХСН') {
        addClass("cont_dropAns7","bg-green")
    } else {
        addClass("cont_dropAns7","bg-red")
    }

    if (getById("cont_dropAns11").innerText == 'IIБ СТАДИЯ ХСН') {
        addClass("cont_dropAns11","bg-green")
    } else {
        addClass("cont_dropAns11","bg-red")
    }


    if (getById("cont_dropAns4").innerText == 'III СТАДИЯ ХСН') {
        addClass("cont_dropAns4","bg-green")
    } else {
        addClass("cont_dropAns4","bg-red")
    }

    if (getById("cont_dropAns8").innerText == 'III СТАДИЯ ХСН') {
        addClass("cont_dropAns8","bg-green")
    } else {
        addClass("cont_dropAns8","bg-red")
    }

    if (getById("cont_dropAns12").innerText == 'III СТАДИЯ ХСН') {
        addClass("cont_dropAns12","bg-green")
    } else {
        addClass("cont_dropAns12","bg-red")
    }




    if (
        getById("cont_dropAns1").innerText == 'I СТАДИЯ ХСН' &&
        getById("cont_dropAns5").innerText == 'I СТАДИЯ ХСН' &&
        getById("cont_dropAns9").innerText == 'I СТАДИЯ ХСН' &&

        getById("cont_dropAns2").innerText == 'IIA СТАДИЯ ХСН' &&
        getById("cont_dropAns6").innerText == 'IIA СТАДИЯ ХСН' &&
        getById("cont_dropAns10").innerText == 'IIA СТАДИЯ ХСН' &&

        getById("cont_dropAns3").innerText == 'IIБ СТАДИЯ ХСН' &&
        getById("cont_dropAns7").innerText == 'IIБ СТАДИЯ ХСН' &&
        getById("cont_dropAns11").innerText == 'IIБ СТАДИЯ ХСН' &&

        getById("cont_dropAns4").innerText == 'III СТАДИЯ ХСН' &&
        getById("cont_dropAns8").innerText == 'III СТАДИЯ ХСН' &&
        getById("cont_dropAns12").innerText == 'III СТАДИЯ ХСН'

    ) {
        userAnswersControlTest.right++

    } else if (
        getById("cont_dropAns1").innerText == 'Выберите правильный ответ ' &&
        getById("cont_dropAns5").innerText == 'Выберите правильный ответ ' &&
        getById("cont_dropAns9").innerText == 'Выберите правильный ответ ' &&

        getById("cont_dropAns2").innerText == 'Выберите правильный ответ ' &&
        getById("cont_dropAns6").innerText == 'Выберите правильный ответ ' &&
        getById("cont_dropAns10").innerText == 'Выберите правильный ответ ' &&

        getById("cont_dropAns3").innerText == 'Выберите правильный ответ ' &&
        getById("cont_dropAns7").innerText == 'Выберите правильный ответ ' &&
        getById("cont_dropAns11").innerText == 'Выберите правильный ответ ' &&

        getById("cont_dropAns4").innerText == 'Выберите правильный ответ ' &&
        getById("cont_dropAns8").innerText == 'Выберите правильный ответ ' &&
        getById("cont_dropAns12").innerText == 'Выберите правильный ответ '
    ) {
        userAnswersControlTest.without++
    } else {
        userAnswersControlTest.wrong++
    }

    nextControlTestQuestion()

}


