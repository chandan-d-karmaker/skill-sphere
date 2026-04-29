import React from 'react';
import coursesData from '@/app/data/courses.json';
import CourseCard from '../shared/CourseCard';

const TopCourse = () => {

    const sortedCourses = [...coursesData].sort((a, b) => b.rating - a.rating);
    const topCourses = sortedCourses.slice(0, 3);

    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-10'>Popular Courses</h2>
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