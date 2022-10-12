import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Home = () => {

    const loaderData = useLoaderData();

    const quizData = loaderData.data;
    console.log(quizData);

    return (
        <div>
            <h3>Home</h3>
            {
                quizData.map(quiz => <Quiz key={quizData.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default Home;