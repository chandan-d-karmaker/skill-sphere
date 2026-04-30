'use client'
import React from 'react';
import NavLink from './Navlink';
import Link from 'next/link';
import { signOut, useSession } from '@/lib/auth-client';
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import Image from 'next/image';

const Navbar = () => {

    const {data} = useSession();
    console.log(data);

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink href="/mainpage">Home</NavLink>
                            </li>
                            <li>
                                <NavLink href="/courses">Courses</NavLink>
                            </li>
                            <li>
                                <NavLink href="/profile">My Profile</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link href='/' className="btn btn-ghost text-xl font-bold">SkillSphere</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink href="/mainpage">Home</NavLink></li>
                        <li><NavLink href="/courses">Courses</NavLink></li>
                        <li><NavLink href="/profile">My Profile</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {
                        data && <div className='gap-2 items-center justify-center hidden md:flex'>
                        <p className='text-xl'>Welcome, <span className='font-medium'>{data?.user?.name}</span> </p>
                        <div className='w-12 h-12 rounded-full'>
                            <Image src={data?.user?.image} alt='user avatar' width={100} height={100} className='rounded-full'/>
                        </div>
                    </div>
                    }
                    {
                        data ? <Link href="/" onClick={() => signOut()} className="btn btn-primary"><IoIosLogOut/>Logout</Link> : <Link href="/login" className="btn btn-primary flex items-center justify-center"><FaUser /> Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;