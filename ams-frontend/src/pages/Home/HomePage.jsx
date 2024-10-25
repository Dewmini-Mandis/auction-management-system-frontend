import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <div>
            <Link to='/signin'>
                <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 float-end'>Sign In</button>
            </Link>
            <h1 className='text-5xl text-center pt-80'>Home Page</h1>
        </div>
    );
};

export default HomePage;


