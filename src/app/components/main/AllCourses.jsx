import Link from 'next/link';
import React from 'react';

const Courses = () => {
    return (
        <div className='bg-base-200 p-10 rounded-xl'>
            <h2 className='text-2xl font-bold text-center'>All courses here</h2>
            <div className='flex items-center justify-center'>

                <Link href={'/courses'} className='btn btn-primary mt-5 mx-auto'>Go to courses page</Link>
            </div>

        </div>
    );
};

export default Courses;