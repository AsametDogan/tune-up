import React from 'react'
import { useSelector } from 'react-redux'
import BottomBar from '../components/BottomBar'
import LeftBar from '../components/LeftBar'
import Navbar from '../components/Navbar'

function MainPage() {
    const selectedMenu = useSelector(state => state.menu.menu)

    return (
        <div className='w-full max-w-[1290px] h-screen fixed'>
            <Navbar />
            <div className='flex h-full w-full flex-row sm:flex-col items-center justify-center  '>
                <LeftBar />
                <div className='h-full w-full  px-6 sm:px-0 rounded-lg  self-center flex justify-center items-center'>
                    <div className='w-[90%] sm:w-full h-full px-5 py-3 bg-amber-50 rounded-lg sm:shadow shadow-lg overflow-y-scroll '>
                        {selectedMenu}
                    </div>

                </div>
                <BottomBar />
            </div>

        </div>
    )
}

export default MainPage