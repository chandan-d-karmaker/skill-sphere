import { getCourseDetails } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import { IoIosTime } from 'react-icons/io';
import { MdPlaylistAddCheckCircle, MdStarRate } from 'react-icons/md';

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

                    <p className="text-[#6D6C80] font-semibold">{courseData.full_details}</p>
                    
                    <div className="flex gap-1 items-center text-[#B2BBCC] font-semibold">
                        <IoIosTime />
                        <span>{courseData.duration}</span>
                    </div>
                   
                    <div className="flex gap-2">
                        <div className="badge badge-md badge-success">{courseData.level}</div>
                        <div className="badge badge-md badge-success">{courseData.category}</div>
                    </div>
                    
                    <div className="">
                        <p className="text-[#6D6C80] font-semibold">
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
                    <div className="divider"></div>
                    
                    <div className="mb-4">
                        <p className="font-bold text-[#161439] mb-2">Course Curriculum</p>
                        <ul>
                            {
                                courseData.curriculum.map((li, idx) => <li key={idx} className="text-[#6D6C80] font-medium flex gap-1 items-center"><MdPlaylistAddCheckCircle /> {li}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;