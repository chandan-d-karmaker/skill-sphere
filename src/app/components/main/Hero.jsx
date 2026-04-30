import Image from 'next/image';
import React from 'react';
import heroImg from '@/assets/hero-image.png';
import bgImage from '@/assets/hero-img.svg';
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='relative rounded-2xl overflow-hidden'>

            <Image
                src={bgImage}
                alt="Background"

                quality={70}
                fill
                style={{
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            />

            <div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 w-4/5 mx-auto py-20'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-5xl text-white font-bold'>Build Your Skills <br />
                        With Online Course</h2>
                    <p className='text-[#afbac4] text-xl'>Learn new skills and advance your career with our expert-led online courses.</p>
                    <div>
                        <button className="btn btn-primary rounded-2xl transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#222] hover:-translate-y-0.5 hover:-translate-x-0.5">Get Started <FaLocationArrow /></button>
                    </div>

                </div>
                <div>
                    <Image src={heroImg} alt='Hero Image' width={500} height={350} />
                </div>
            </div>
        </div>
    );
};

export default Hero;