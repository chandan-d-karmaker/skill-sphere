import Link from 'next/link';
import React from 'react';

const Courses = () => {
    return (
        <div className='bg-linear-to-r from-red-50 via-blue-50 to-red-100 p-10 rounded-xl md:w-4/5 md:mx-auto'>
            <h2 className='text-2xl font-bold text-center'>Click below to browse all courses here</h2>
            <div className='flex items-center justify-center'>

                <Link href={'/courses'} className='btn btn-primary mt-5 mx-auto transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#222] hover:-translate-y-0.5 hover:-translate-x-0.5'>Go to courses page</Link>
            </div>

        </div>
    );
};

export default Courses;