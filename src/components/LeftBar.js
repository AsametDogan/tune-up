import React, { useEffect, useState } from 'react'
import { MdQueueMusic, MdHome, MdOutlineExplore } from "react-icons/md";
import { GiDrumKit } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../Stores/Menu';


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
        <div className={`${isOpen ? "px-2" : ""} h-screen border-r gap-2 group flex flex-col sm:hidden`}>

            <div className='w-full flex justify-end'>
                <button onClick={handleCloseL} className={`flex ${isOpen ? "group-hover:animate-bounce" : "translate-x-3"} text-2xl opacity-60 hover:opacity-90 duration-500 transition-all `}><MdQueueMusic /></button>
            </div>

            <div className={`${isOpen ? "w-24" : "w-0"}  duration-300 transition-all w-full`}>
                <div className={` ${visibility} self-start justify-self-start w-full flex flex-col gap-2`}>
                    <button
                        onClick={handleChangeMenu}
                        itemID="home"
                        id='home'
                        className={`${selectedMenu === "home" ? "opacity-90 bg-indigo-500 scale-105 text-sky-50 hover:text-gray-900" : ""} rounded-lg bg-transparent hover:bg-slate-200 px-2.5 py-1.5 opacity-70 hover:opacity-95 transition-all duration-300 text-left flex items-center gap-1 hover:scale-110`}>
                        <MdHome id='home' className='text-xl rounded-lg' />
                        Home
                    </button>
                    <button
                        onClick={handleChangeMenu}
                        id='explore'
                        className={`${selectedMenu === "explore" ? "opacity-90 bg-indigo-500 scale-105 text-sky-50 hover:text-gray-900" : ""} rounded-lg bg-transparent hover:bg-slate-200 px-2.5 py-1.5 opacity-70 hover:opacity-95 transition-all duration-300 text-left flex items-center gap-1 hover:scale-110`}>
                        <MdOutlineExplore id='explore' className='text-xl hover:animate-spin' />
                        Explore
                    </button>
                    <button
                        onClick={handleChangeMenu}
                        id='tune-up'
                        className={`${selectedMenu === "tune-up" ? "opacity-90 bg-indigo-500 scale-105 text-sky-50 hover:text-gray-900" : ""} rounded-lg bg-transparent hover:bg-slate-200 px-2.5 py-1.5 opacity-70 hover:opacity-95 transition-all duration-300 text-left flex items-center gap-1 hover:scale-110`}>
                        <GiDrumKit id='tune-up' className='text-xl ' />
                        TuneUP
                    </button>
                    <button
                        onClick={handleChangeMenu}
                        id='test'
                        className={`${selectedMenu === "test" ? "opacity-90 bg-indigo-500 scale-105 text-sky-50 hover:text-gray-900" : ""} rounded-lg bg-transparent hover:bg-slate-200 px-2.5 py-1.5 opacity-70 hover:opacity-95 transition-all duration-300 text-left flex items-center gap-1 hover:scale-110`}>
                        Try Yourself
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LeftBar