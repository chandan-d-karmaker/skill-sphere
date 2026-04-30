import React from 'react';

const loading = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <h2 className='text-xl font-medium mr-5'>please be patient</h2>

            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default loading;