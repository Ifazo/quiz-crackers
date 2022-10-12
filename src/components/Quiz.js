import React from 'react';

const Quiz = (quiz) => {
    
    console.log(quiz);
    const {name, logo, total} = quiz.quiz;

    return (
        <div>
            <img src={logo} alt=""/>
            <h1>Name: {name}</h1>
            <button><small>Total:{total}</small></button>
        </div>
    );
};

export default Quiz;