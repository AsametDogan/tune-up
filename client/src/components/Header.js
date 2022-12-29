import React from 'react'
import { Link } from 'react-router-dom'

function Header({ setTab }) {

    const handleChangeTab = (e) => {
        setTab(e.target.id)
    }
    return (
        <div className='w-full flex flex-row justify-between px-6 py-2 shadow-md items-center'>
            <div className='my-1'>
                <label className='text-xl font-semibold'>Tune-UP</label>
            </div>
            <nav className='flex gap-4'>
                <button onClick={handleChangeTab} id="login" className='rounded-lg px-3 py-1 bg-violet-500 hover:bg-violet-300 font-semibold text-white duration-200'>Login</button>
                <button onClick={handleChangeTab} id="sign-up" className='rounded-lg px-3 py-1 bg-violet-500 hover:bg-violet-300 font-semibold text-white duration-200'>Signup</button>
            </nav>
        </div>
    )
}

export default Header