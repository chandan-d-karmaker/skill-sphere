'use client'
import React from 'react';
import { authClient } from "@/lib/auth-client"

const UpdateProfile = () => {

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        // console.log(userData);


        const { data, error } = await authClient.updateUser({
            ...userData
        })
        // console.log("Update user info: ", {data, error})

       window.location.href = '/profile'

    }

    return (
        <div className='flex items-center justify-center animate__animated animate__backInDown md:h-screen'>

            <form onSubmit={handleUpdate} className="fieldset bg-linear-to-tl from-red-50 via-blue-50 to-red-100  border-base-300 rounded-box w-xl border p-4">
                <legend className="fieldset-legend">Update Information</legend>

                <label className="label">Name</label>
                <input name='name' type="text" className="input w-full" placeholder="Name" />

                <label className="label">Photo URL</label>
                <input name='image' type="text" className="input w-full" placeholder="photo url" />

                <button className="btn btn-neutral mt-4">Update info</button>
            </form>

        </div>
    );
};

export default UpdateProfile;