"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

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
        <div className='flex flex-col justify-center items-center h-screen'>

            <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


                <label className="label">Name</label>
                <input name='name' type="text" className="input" placeholder="Name" />

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />

                <label className="label">Photo</label>
                <input name='image' type="text" className="input" placeholder="Photo URL" />

                <label className="label">Password</label>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type="password"
                        name='password'
                        required
                        placeholder="Password"
                        minLength="8"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    />
                </label>
                <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>

                <button className="btn btn-neutral my-4">Register</button>
                <p>Already registered? <Link href="/login" className="text-blue-500">Login here</Link></p>

                <div className="divider">OR</div>

                <div
                    className="btn flex gap-2 items-center justify-center border p-2 rounded-sm text-blue-500"
                >
                    {" "}
                    <FaGoogle /> Login with google
                </div>
            </form>


        </div>
    );
};

export default RegisterPage;