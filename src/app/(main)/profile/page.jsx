'use client'
import { useSession } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {

    const { data, isPending} = useSession();

    console.log(data);

    // add a better loading state later
    if (isPending) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <h2 className='text-4xl font-semibold text-center'>My Profile</h2>
            <Image
                src={data?.user.image}
                alt={data?.user.name}
                width={100}
                height={100}
            />
            <p>Name: {data?.user.name}</p>
            <p>Email: {data?.user.email}</p>
        </div>
    );
};

export default ProfilePage;