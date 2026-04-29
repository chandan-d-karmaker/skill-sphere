"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const RegisterPage = () => {

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);

        const { data, error } = await authClient.signUp.email({
            ...userData,

            callbackURL: '/',
        });
        console.log("Register user data:", { data, error })


        if (error) {
            console.error(error.message);
            return;
        }
        // callbackURL not working, so I've to manually redirect
        router.push('/');

    }

    return (
        <div className='flex justify-center items-center h-screen'>

            <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <label className="label">Name</label>
                <input name='name' type="text" className="input" placeholder="Name" />

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral my-4">Register</button>
                <p>Already registered? <Link href="/login" className="text-blue-500">Login here</Link></p>
            </form>

        </div>
    );
};

export default RegisterPage;