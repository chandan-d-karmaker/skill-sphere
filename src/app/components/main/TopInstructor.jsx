import Image from 'next/image';
import React from 'react';
import { FaStar } from "react-icons/fa";

const TopInstructor = () => {
    return (
        <div className='bg-linear-to-tl from-red-50 via-blue-50 to-red-100 p-10 rounded-xl md:w-4/5 md:mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-10'>Top Instructors</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                <div className='bg-base-100 space-y-4 p-5 flex flex-col justify-center rounded-xl border border-red-100'>
                    <div className='flex items-center justify-center'>
                        <Image src={'https://i.ibb.co.com/bjM7KTx3/Image.png'} alt='instructor' width={300} height={250} className='rounded-xl' />
                    </div>
                    <div className='text-center'>
                        <h2 className='text-xl font-semibold'>John Doe</h2>
                        <p className='text-[#637381]'>Senior Developer</p>
                    </div>
                    <div className='divider my-0'></div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center justify-center gap-2'>

                            {/* icon not aliging with text */}
                            <div>
                                <FaStar className='text-yellow-500' />
                            </div>
                            <div className='text-center'>

                                <p className='font-bold text-center'> 4.9</p>
                            </div>
                        </div>
                        <div className='text-center'>

                            <p className='font-bold text-center'> 490 <span className='text-sm font-normal text-[#637381]'>Students</span></p>

                        </div>
                    </div>
                </div>

                <div className='bg-base-100 space-y-4 p-5 flex flex-col justify-center rounded-xl border border-blue-100'>
                    <div className='flex items-center justify-center'>
                        <Image src={'https://i.ibb.co.com/gbCk2jV6/Image-1.png'} alt='instructor' width={300} height={250} className='rounded-xl' />
                    </div>
                    <div className='text-center'>
                        <h2 className='text-xl font-semibold'>Jane Smith</h2>
                        <p className='text-[#637381]'>UI/UX Designer</p>
                    </div>
                    <div className='divider my-0'></div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center justify-center gap-2'>

                            {/* icon not aliging with text */}
                            <div>
                                <FaStar className='text-yellow-500' />
                            </div>
                            <div className='text-center'>

                                <p className='font-bold text-center'> 4.8</p>
                            </div>
                        </div>
                        <div className='text-center'>

                            <p className='font-bold text-center'> 560 <span className='text-sm font-normal text-[#637381]'>Students</span></p>

                        </div>
                    </div>
                </div>

                <div className='bg-base-100 space-y-4 p-5 flex flex-col justify-center rounded-xl border border-blue-100'>
                    <div className='flex items-center justify-center'>
                        <Image src={'https://i.ibb.co.com/qMpFbQDb/Image-2.png'} alt='instructor' width={300} height={250} className='rounded-xl' />
                    </div>
                    <div className='text-center'>
                        <h2 className='text-xl font-semibold'>Sarah Jenkins</h2>
                        <p className='text-[#637381]'>Digital Marketer</p>
                    </div>
                    <div className='divider my-0'></div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center justify-center gap-2'>

                            {/* icon not aliging with text */}
                            <div>
                                <FaStar className='text-yellow-500' />
                            </div>
                            <div className='text-center'>

                                <p className='font-bold text-center'> 4.8</p>
                            </div>
                        </div>
                        <div className='text-center'>

                            <p className='font-bold text-center'> 410 <span className='text-sm font-normal text-[#637381]'>Students</span></p>

                        </div>
                    </div>
                </div>

                <div className='bg-base-100 space-y-4 p-5 flex flex-col justify-center rounded-xl border border-red-100'>
                    <div className='flex items-center justify-center'>
                        <Image src={'https://i.ibb.co.com/LDZxKZVj/Image-3.png'} alt='instructor' width={300} height={250} className='rounded-xl' />
                    </div>
                    <div className='text-center'>
                        <h2 className='text-xl font-semibold'>Dr. Alan Turing</h2>
                        <p className='text-[#637381]'>Computer Scientist</p>
                    </div>
                    <div className='divider my-0'></div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center justify-center gap-2'>

                            {/* icon not aliging with text */}
                            <div>
                                <FaStar className='text-yellow-500' />
                            </div>
                            <div className='text-center'>

                                <p className='font-bold text-center'> 4.7</p>
                            </div>
                        </div>
                        <div className='text-center'>

                            <p className='font-bold text-center'> 390 <span className='text-sm font-normal text-[#637381]'>Students</span></p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopInstructor;