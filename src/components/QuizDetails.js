import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const QuizDetails = () => {

    const loaderData = useLoaderData();
    const questions = loaderData.data.questions;
    // console.log(questions);

    return (
        <div>
            {
                questions.map(quest => <Questions key={questions.id} quest={quest}></Questions>)
            }
        </div>
    );
};

export default QuizDetails;