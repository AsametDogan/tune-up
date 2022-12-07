import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='w-full flex flex-row justify-between px-6 py-2 shadow-md items-center'>
            <div className='my-1'>
                <label className='text-xl font-semibold'>Tune-UP</label>
            </div>
            <div className='flex gap-4'>
                <Link to="login" className='rounded-lg px-3 py-1 bg-violet-500 hover:bg-violet-300 font-semibold text-white duration-200'>Login</Link>
                <Link to="sign-up" className='rounded-lg px-3 py-1 bg-violet-500 hover:bg-violet-300 font-semibold text-white duration-200'>Signup</Link>
            </div>
        </div>
    )
}

export default Header