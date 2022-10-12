import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Home = () => {

    const loaderData = useLoaderData();

    const quizData = loaderData.data;
    // console.log(quizData);

    return (
        <div>
                    <img src='https://wallpaperforu.com/wp-content/uploads/2021/09/Coding-Wallpapers51680x1050.jpg' alt="header-img" />
                    <div>{quizData.map(quiz => <Quiz key={quizData.id} quiz={quiz}></Quiz>)}</div>
        </div>
    );
};

export default Home;