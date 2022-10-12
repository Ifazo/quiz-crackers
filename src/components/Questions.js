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
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-xxl leading-6 font-medium text-gray-900">{question}</h3>
            {options.map(option => <button type="button" className="inline-flex items-center m-5 px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleAnswer}>{option}</button>)}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Questions;