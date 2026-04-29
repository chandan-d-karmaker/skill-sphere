import React from 'react';
import Navbar from '../components/shared/Navbar';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className='md:w-4/5 md:mx-auto my-20 mx-4'>

                {children}
            </main>
        </div>
    );
};

export default Mainlayout;