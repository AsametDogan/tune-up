import React from 'react'
import { MdQueueMusic, MdHome, MdOutlineExplore } from "react-icons/md";
import { GiDrumKit } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../Stores/Menu';
import { Link } from 'react-router-dom';
function BottomBar() {
    const selectedMenu = useSelector(state => state.menu.menu)
    const dispatch = useDispatch()
    const handleChangeMenu = (e) => {
        dispatch(setMenu(e.target.id))
    }
    return (
        <div className='just-sm:hidden px-4 grid grid-cols-4 gap-8 justify-around text-xl items-center bg-slate-200 fixed bottom-0 w-full h-12'>
            <Link
                to="home"
                onClick={handleChangeMenu} id="home"
                className={`flex justify-center py-2 hover:bg-slate-300 rounded-lg opacity-70 hover:opacity-95 transition-all duration-300 focus:bg-violet-600 scale-105 focus:text-sky-50 ${selectedMenu === "home" ? "opacity-90 bg-violet-500 scale-105 text-sky-50 hover:text-gray-900" : ""}`}>
                <MdHome id="home" />
            </Link>
            <Link
                to="explore"
                onClick={handleChangeMenu} id="explore"
                className={`flex justify-center py-2 hover:bg-slate-300 rounded-lg opacity-70 hover:opacity-95 transition-all duration-300 focus:bg-violet-600 scale-105 focus:text-sky-50 ${selectedMenu === "explore" ? " opacity-90 bg-violet-600 scale-105 text-sky-50 hover:text-gray-900" : ""}`}>
                <MdOutlineExplore id="explore" />
            </Link>
            <Link
                to="tune-up"
                onClick={handleChangeMenu} id="tune-up"
                className={`flex justify-center py-2 hover:bg-slate-300 rounded-lg opacity-70 hover:opacity-95 transition-all duration-300 focus:bg-violet-600 scale-105 focus:text-sky-50 ${selectedMenu === "tune-up" ? "opacity-90 bg-violet-600 scale-105 text-sky-50 hover:text-gray-900" : ""}`}>
                <GiDrumKit id="tune-up" />
            </Link>
            <Link
                to="user-sounds"
                onClick={handleChangeMenu} id="test"
                className={`flex justify-center py-2 hover:bg-slate-300 rounded-lg opacity-70 hover:opacity-95 transition-all duration-300 focus:bg-violet-600 scale-105 focus:text-sky-50 ${selectedMenu === "test" ? "opacity-90 bg-violet-600 scale-105 text-sky-50 hover:text-gray-900" : ""}`}>
                <MdQueueMusic id="test" />
            </Link>

        </div>
    )
}

export default BottomBar