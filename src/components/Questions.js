import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Questions = (quest) => {

    // console.log(quest.quest);
    const { id, options, question, correctAnswer } = quest.quest;

    const showAnswer = (e) => {
        toast(correctAnswer);
    }

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
            <div className="flex text-center">
            <h3 className="text-xxl leading-6 font-medium text-gray-900">{question.replace("<p>"," ")}</h3>
            <button key={id} onClick={showAnswer}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>
            </div>
            {options.map(option => <button type="button" className="inline-flex items-center m-5 px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleAnswer}>{option}</button>)}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Questions;