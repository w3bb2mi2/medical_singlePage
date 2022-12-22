import { showResults } from "../displayElement";
import { userAnswers, userAnswersControlTest } from "../mainData";

export const mainLogic = () =>
    document
        .querySelectorAll(
            ".btnAnswer:not(#btnAnswerQuestion36):not(.btnInputTextQuestion):not(#controlQuestion36)"
        )
        .forEach((btn) => {
            btn.addEventListener("click", function (e) {
                let isControlTest = this.classList.contains("btnAnswerControl")
                let allinputs = this.closest(".question ")?.querySelectorAll("input");
                let raghtAnswerInQuestion = 0;
                let isAnswer = 0; //отвечено
                let isRight = 0; //отвечено правильно
                let isWrong = 0; //отвечено правильно
                let radioInp = false;
                for (let i = 0; i < allinputs.length; i++) {
                    if (allinputs[i].type == "radio") {
                        radioInp = true;
                        if (allinputs[i].dataset.answer == "x") {
                            if (!isControlTest) {
                                allinputs[i].parentElement
                                    .querySelector("p")
                                    ?.classList?.add("right");
                                allinputs[i].classList?.add("right");
                            }
                            if (allinputs[i].checked) {
                                if (isControlTest) {
                                    userAnswersControlTest.right++;
                                } else {
                                    userAnswers.right++;
                                }
                                isAnswer++;
                            }
                        } else {
                            if (!isControlTest) {
                                allinputs[i].parentElement
                                    .querySelector("p")
                                    ?.classList?.add("error");
                            }
                            if (allinputs[i].checked) {
                                if (isControlTest) {
                                    userAnswersControlTest.wrong++;
                                } else {
                                    userAnswers.wrong++;
                                }
                                isAnswer++;
                            }
                        }
                    } else if (allinputs[i].type == "checkbox") {
                        if (allinputs[i].dataset.answer) {
                            raghtAnswerInQuestion++;
                            if (!isControlTest) {
                                allinputs[i].parentElement.classList.add("right");
                            }
                            if (allinputs[i].checked) {
                                //привильные ответы
                                isRight++;
                                isAnswer++;
                            } else {
                                //не правильные ответы
                            }
                        } else {
                            if (!isControlTest) {
                                allinputs[i].parentElement.classList.add("error");
                            }
                            if (allinputs[i].checked) {
                                isWrong++;
                                isAnswer++;
                            }
                        }
                    }
                }

                if (!isAnswer) {
                    if (isControlTest) {
                        userAnswersControlTest.without++;
                    } else {
                        userAnswers.without++;
                    }
                } else if (
                    (isWrong >= 1 && isAnswer != 0) ||
                    (isRight != raghtAnswerInQuestion && isAnswer != 0)
                ) {
                    if (isControlTest) {
                        userAnswersControlTest.wrong++;
                    } else {
                        userAnswers.wrong++;
                    }

                }
                if (isRight == raghtAnswerInQuestion && isWrong == 0 && !radioInp) {
                    if (isControlTest) {
                        userAnswersControlTest.right++;
                    } else {
                        userAnswers.right++;
                    }
                }
                try {
                    btn.disabled = true;
                    btn.nextElementSibling.disabled = false;
                } catch (error) {

                }

                showResults();
                
            });
        });
