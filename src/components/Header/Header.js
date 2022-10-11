import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <nav>
                <Link to='/blog'>Blog</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
            </nav>
        </div>
    );
};

export default Header;