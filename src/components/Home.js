import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Home = () => {

    const loaderData = useLoaderData();

    const quizData = loaderData.data;
    // console.log(quizData);

    return (
        <div>
                    <img src='../header-img.webp' alt="header-img" />
                    <div>{quizData.map(quiz => <Quiz key={quizData.id} quiz={quiz}></Quiz>)}</div>
        </div>
    );
};

export default Home;