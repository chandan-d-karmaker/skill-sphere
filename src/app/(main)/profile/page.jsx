'use client'
import { useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {

    const { data, isPending } = useSession();

    console.log(data);

    // add a better loading state later
    if (isPending) {
        return <div className='flex justify-center items-center'>
            <span className="loading loading-ring loading-xl"></span>
        </div>;
    }
    return (
        <div>
            {
                data ? <div className='flex flex-col items-center justify-center space-y-4 text-center bg-linear-to-r from-red-50 via-blue-50 to-red-100 md:w-1/2 md:mx-auto p-8 rounded-2xl'>

                    <Image
                        src={data?.user.image}
                        alt={data?.user.name}
                        width={100}
                        height={100}
                        className='rounded-full w-25 h-25'
                    />
                    <p className='font-medium'>Name: {data?.user.name}</p>
                    <p className='font-medium'>Email: {data?.user.email}</p>

                    <div>

                        <Link href='/update-profile'>
                            <button className='btn btn-primary btn-outline'>Edit profile</button>
                        </Link>
                    </div>
                </div> : <div className='bg-base-200 p-10 text-center space-y-4'>
                    <h2 className='text-2xl font-medium'>Please login first</h2>
                </div>
            }
        </div>
    );
};

export default ProfilePage;