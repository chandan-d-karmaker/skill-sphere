import React from 'react';
import CourseCard from '@/app/components/shared/CourseCard';
import { getCourses } from '@/lib/data';

export const metadata = {
    title: "All Courses",
};

const AllCourses = async ({ searchParams }) => {
    const coursesData = await getCourses();
    const params = await searchParams;
    const searchQuery = params.q || '';
    // console.log(searchParams);

    const filteredCourses = searchQuery
        ? coursesData.filter(course =>
            course.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : coursesData;

    return (
        <div className='md:w-4/5 md:mx-auto mx-4'>
            <div className='flex items-center justify-between mb-10'>
                <h2 className='text-4xl font-semibold '>All courses here</h2>
                <form className="flex gap-2">
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            name="q"
                            defaultValue={searchQuery}
                            placeholder="Search courses..."
                        />
                    </label>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    filteredCourses.length > 0 ? (
                        filteredCourses.map(course => <CourseCard key={course.id} course={course} />)
                    ) : (
                        <p className="col-span-full text-center text-gray-500 mt-8">
                            No courses found matching {searchQuery}
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default AllCourses;