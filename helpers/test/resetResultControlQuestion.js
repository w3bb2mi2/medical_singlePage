import { userAnswersControlTest } from "../mainData";


export function resetResultControlQuestion(){
    userAnswersControlTest.right = 0;
    userAnswersControlTest.without = 0;
    userAnswersControlTest.wrong = 0;

}