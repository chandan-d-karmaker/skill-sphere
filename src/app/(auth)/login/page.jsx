'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const LoginPage = () => {

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);

        const { data, error } = await authClient.signIn.email({
            ...userData,

            callbackURL: '/',
        });
        console.log("Login user data:", { data, error })


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

                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral my-4">Login</button>
                <p>New here? <Link href="/register" className="text-blue-500">Register here</Link></p>
            </form>
        </div>
    );
};

export default LoginPage;