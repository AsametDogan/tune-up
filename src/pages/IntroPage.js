import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logo } from '../media/mediaIndex'
import { setMenu } from '../Stores/Menu'

function IntroPage() {
    const dispatch = useDispatch()
    const handleChangeMenu = (e) => {
        dispatch(setMenu(e.target.id))
    }
    return (
        <div className='py-8 sm:py-1 w-[85%] sm:w-[92%] flex flex-col gap-8 sm:gap-3 overflow-y-scroll scrollbar-hide' >
            <div className='w-full flex flex-col items-center justify-center gap-2 '>
                <div className='w-48 h-48 sm:h-36 sm:w-36 rounded-full hover:animate-ping'>
                    <img src={logo} alt="logo" ></img>
                </div>
                <span className='border-b-2 border-gray-400 text-4xl font-semibold py-2 px-6 text-gray-700'>TUNE-UP</span>
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-2 '>
                <span className='text-center'>Tune-UP is an exciting new website that allows users to explore their musical talents and connect with others who share their interests.
                    <br /> On the site, users can play virtual instruments and record their performances, creating unique pieces of music that can be shared with others. The social media feature of Tune-UP allows users to interact with other users' music,giving reactions to show their support and appreciation to others. Whether you're a seasoned musician or just starting out, Tune-UP offers a fun and engaging platform for creating and sharing music.
                    <br /> <br /> <span className='text-base' > So why wait? Head to Tune-UP and start making music today! </span></span>
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-2 '>
                <Link
                    to="tune-up"
                    onClick={handleChangeMenu}
                    id='tune-up'
                    className='px-3 py-2 animate-bounce bg-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 border hover:border-indigo-500 hover:scale-105 transition-all rounded-lg font-semibold text-lg text-white'>Lets Try Now</Link>
            </div>
        </div>
    )
}

export default IntroPage