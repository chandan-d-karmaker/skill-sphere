import React from 'react';
import CourseCard from '@/app/components/shared/CourseCard';
import { getCourses } from '@/lib/data';

export const metadata = {
  title: "All Courses",
};

const AllCourses = async () => {

    const coursesData = await getCourses();
    return (
        <div className='md:w-4/5 md:mx-auto mx-4'>
            <h2 className='text-4xl font-semibold text-center mb-10'>All courses here</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    coursesData.map(course => <CourseCard key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default AllCourses;