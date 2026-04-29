import React from 'react';
import coursesData from '@/app/data/courses.json';
import CourseCard from '@/app/components/shared/CourseCard';

const AllCourses = () => {
    return (
        <div>
            <h2 className='text-4xl font-semibold text-center'>All courses here</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    coursesData.map(course => <CourseCard key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default AllCourses;