import Hero from '@/app/components/main/Hero';
import LearningTips from '@/app/components/main/LearningTips';
import TopCourse from '@/app/components/main/TopCourse';
import TopInstructor from '@/app/components/main/TopInstructor';
import React from 'react';
import Courses from '@/app/components/main/AllCourses';

const Mainpage = () => {
    return (
        <div className='space-y-20'>
           <Hero/>
           <TopCourse/>
           <LearningTips/>
           <TopInstructor/>
           <Courses/>
        </div>
    );
};

export default Mainpage;