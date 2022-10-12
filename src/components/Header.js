import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex space-x-4 sm:ml-6 sm:block flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <h3 className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Quiz Contest</h3>
            <div>
            <Link to='./' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to='./statistics' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Statistics</Link>
            <Link to='./blog' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
            </div>
        </div>
    );
};

export default Header;