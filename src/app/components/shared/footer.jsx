import Image from 'next/image';
import React from 'react';
import bgImage from '@/assets/bg-hexagon.svg';

const Footer = () => {
    return (
        <div className='py-30 relative'>

            <Image
                src={bgImage}
                alt="Background"
                
                quality={100}
                fill
                style={{
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            />

            <div className='md:w-4/5 md:mx-auto mx-4 relative z-10'>
                <div className='max-w-sm'>
                    <h1 className='text-5xl text-white font-bold mb-5'>Skill-Sphere</h1>
                    <p className='text-white'>A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;