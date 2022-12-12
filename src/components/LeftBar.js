import React, { useEffect, useState } from 'react'
import { MdQueueMusic, MdHome, MdOutlineExplore } from "react-icons/md";
import { GiDrumKit } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../Stores/Menu';
import { Link } from 'react-router-dom';


function LeftBar() {
    const [isOpen, setIsOpen] = useState(true)
    const [visibility, setVisibility] = useState("")
    const handleCloseL = () => {
        setIsOpen(!isOpen)
    }

    const selectedMenu = useSelector(state => state.menu.menu)
    const dispatch = useDispatch()
    const handleChangeMenu = (e) => {
        dispatch(setMenu(e.target.id))
    }

    useEffect(() => {
        isOpen ? setTimeout(() => { setVisibility("visible") }, 220)
            :
            setVisibility("hidden")
    }, [isOpen])


    return (
        <div className={`${isOpen ? "px-2" : ""} h-full border-r gap-2 group flex flex-col sm:hidden`}>

            <div className='w-full flex justify-end'>
                <button onClick={handleCloseL} className={`flex ${isOpen ? "group-hover:animate-bounce" : "translate-x-3"} text-2xl opacity-60 hover:opacity-90 duration-500 transition-all `}><MdQueueMusic /></button>
            </div>

            <div className={`${isOpen ? "w-24" : "w-0"}  duration-300 transition-all w-full`}>
                <div className={` ${visibility} self-start justify-self-start w-full flex flex-col gap-2`}>
                    <Link
                        to="home"
                        onClick={handleChangeMenu}
                        itemID="home"
                        id='home'
                        className={`${selectedMenu === "home" ? "opacity-90 bg-indigo-600 scale-105 text-sky-50 hover:text-gray-900" : "bg-transparent"} rounded-lg  hover:bg-slate-200 px-2.5 py-1.5 opacity-70 hover:opacity-95 transition-all duration-300 text-left flex items-center gap-1 hover:scale-110`}>
                        <MdHome id='home' className='text-xl rounded-lg' />
                        Home
                    </Link>
                    <Link
                        to="explore"
                        onClick={handleChangeMenu}
                        id='explore'
                        className={`${selectedMenu === "explore" ? "opacity-90 bg-indigo-400 scale-105 text-sky-50 hover:text-gray-900" : "bg-transparent"} rounded-lg  hover:bg-slate-200 px-2.5 py-1.5 opacity-70 hover:opacity-95 transition-all duration-300 text-left flex items-center gap-1 hover:scale-110`}>
                        <MdOutlineExplore id='explore' className='text-xl hover:animate-spin' />
                        Explore
                    </Link>
                    <Link
                        to="tune-up"
                        onClick={handleChangeMenu}
                        id='tune-up'
                        className={`${selectedMenu === "tune-up" ? "opacity-90 bg-indigo-500 scale-105 text-sky-50 hover:text-gray-900" : "bg-transparent"} rounded-lg  hover:bg-slate-200 px-2.5 py-1.5 opacity-70 hover:opacity-95 transition-all duration-300 text-left flex items-center gap-1 hover:scale-110`}>
                        <GiDrumKit id='tune-up' className='text-xl ' />
                        TuneUP
                    </Link>
                    <Link
                        to="test"
                        onClick={handleChangeMenu}
                        id='test'
                        className={`${selectedMenu === "test" ? "opacity-90 bg-indigo-500 scale-105 text-sky-50 hover:text-gray-900" : "bg-transparent"} rounded-lg  hover:bg-slate-200 px-2.5 py-1.5 opacity-70 hover:opacity-95 transition-all duration-300 text-left flex items-center gap-1 hover:scale-110`}>
                        Try Yourself
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LeftBar