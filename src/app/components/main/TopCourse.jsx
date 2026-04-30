import React from 'react';
import CourseCard from '../shared/CourseCard';
import { getCourses } from '@/lib/data';

const TopCourse = async () => {

    const coursesData = await getCourses();
    // console.log(coursesData);
    const sortedCourses = [...coursesData].sort((a, b) => b.rating - a.rating);
    const topCourses = sortedCourses.slice(0, 3);

    return (
        <div className='md:w-4/5 md:mx-auto'>
            <h2 className='divider text-3xl font-bold text-center mb-10'>Popular Courses</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    topCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))
                }
            </div>

        </div>
    );
};

export default TopCourse;