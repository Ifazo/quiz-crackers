import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Questions = (quest) => {

    // console.log(quest.quest);
    const { options, question, correctAnswer } = quest.quest;

    const handleAnswer = (e) => {
        // console.log(e.target.innerText);
        // console.log(correctAnswer);
        if (e.target.innerText === correctAnswer) {
            // alert('Correct Answer');
            toast("Right Answer!");
        } else {
            // alert('Wrong Answer');
            toast("Wrong Answer!");
        }
    }

    return (
        <div>
            <div>{question}</div>
            {options.map(option => <button onClick={handleAnswer}>{option}</button>)}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Questions;