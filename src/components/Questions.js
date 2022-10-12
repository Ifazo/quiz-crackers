import { Icon } from "@mui/material";

const Questions = (quest) => {

    // console.log(quest.quest);
    const { options, question, correctAnswer } = quest.quest;

    const handleAnswer = (e) => {
        // console.log(e.target.innerText);
        // console.log(correctAnswer);
        if (e.target.innerText === correctAnswer) {
            alert('Correct Answer');
        } else {
            alert('Wrong Answer');
        }
    }

    return (
        <div>
            <div>{question}</div>
            {options.map(option => <button onClick={handleAnswer}>{option}</button>)}
        </div>
    );
};

export default Questions;