import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = (quiz) => {
    
    // console.log(quiz);
    const {id, name, logo, total} = quiz.quiz;

    return (
        <div>
            <img src={logo} alt=""/>
            <h1>Name: {name}</h1>
            <button><small>{name} Quiz : {total}</small></button>
            <Link to={`./quiz/${id}`}>{name}</Link>
        </div>
    );
};

export default Quiz;