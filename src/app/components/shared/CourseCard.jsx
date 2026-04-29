import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="card bg-base-100 shadow-sm border border-base-300 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#555] hover:-translate-y-1 hover:-translate-x-1">
            <figure className='md:mt-10'>
                <Image src={course.image} alt={course.title} width={400} height={250} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{course.title}</h2>
                <p className='text-lg font-semibold text-[#555]'>{course.instructor}</p>
                <p className='text-xl font-semibold'>Rating: {course.rating}</p>
                <div className="card-actions justify-end">
                    <Link href={`/courses/${course.id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;