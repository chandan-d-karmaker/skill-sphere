import { getCourseDetails } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import { IoIosTime } from 'react-icons/io';
import {  MdStarRate } from 'react-icons/md';
import { IoIosPlayCircle } from "react-icons/io";

// export const metadata = {
// title: {courseData.title},
//   description: "Online Learning Platform",
// };

const CourseDetailsPage = async ({ params }) => {

    const { id } = await params;
    const courseData = await getCourseDetails(id);
    console.log(courseData);

    return (
        <div className="lg:w-1/2 mx-auto my-20 px-2">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#161439] mb-6 text-center">Course Details</h2>
            <h2 className="text-[#161439] text-3xl font-bold text-center my-2">{courseData.title}</h2>
            <div className="bg-base-100 shadow-sm rounded-xl">

                <figure className="rounded-xl">
                    <Image
                        src={courseData.image}
                        alt={courseData.title}
                        width={500}
                        height={500}
                        className="p-4 w-full rounded-3xl"
                    />
                </figure>
                <div className="flex flex-col gap-3 m-4">

                    <p className="font-semibold">{courseData.full_details}</p>
                    
                    <div className="flex gap-1 items-center text-[#747679] font-semibold">
                        <IoIosTime />
                        <span>{courseData.duration}</span>
                    </div>
                   
                    <div className="flex gap-2">
                        <div className="badge badge-md badge-success">{courseData.level}</div>
                        <div className="badge badge-md badge-success">{courseData.category}</div>
                    </div>
                    
                    <div className="">
                        <p className="text-[#090909] font-semibold">
                            <span className="text-[#161439]">Instructor:</span> {courseData.instructor}
                        </p>
                    </div>
                   
                    <div className="">
                        <p className="text-[#6D6C80] font-medium flex gap-1 items-center">
                            <span>Ratings: </span>
                            <span className="text-amber-300">
                                <MdStarRate />
                            </span>
                            {courseData.rating}
                        </p>
                    </div>
                    <div className="divider my-1"></div>
                    
                    <div className="mb-4">
                        <p className="font-bold text-[#161439] mb-2">Course Curriculum</p>
                        <ul className='space-y-2'>
                            {
                                courseData.curriculum.map((li, idx) => <li key={idx} className="text-[#403f42] border border-base-300 bg-linear-to-r from-red-50 via-blue-50 to-red-100  p-2 rounded-2xl font-medium flex gap-1 items-center"><IoIosPlayCircle /> {li}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;