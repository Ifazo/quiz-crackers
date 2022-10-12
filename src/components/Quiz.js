import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = (quiz) => {
    
    // console.log(quiz);
    const {id, name, logo } = quiz.quiz;

    return (
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-xxl leading-6 font-medium text-gray-900">Name: {name}</h3>
            <img src={logo} alt=""/>
            <button  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><Link to={`./quiz/${id}`}>{name} Quiz</Link></button>
        </div>
    );
};

export default Quiz;