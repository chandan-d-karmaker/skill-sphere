import React from 'react';
import CourseCard from '../shared/CourseCard';
import { getCourses } from '@/lib/data';

const LatestCourse = async () => {

    const coursesData = await getCourses();
    // console.log(coursesData);
    const latestCourses = coursesData.slice(6, 9);

    return (
        <div className='md:w-4/5 md:mx-auto'>
            <h2 className='divider text-3xl font-bold text-center mb-10'>New Releases</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    latestCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))
                }
            </div>

        </div>
    );
};

export default LatestCourse;