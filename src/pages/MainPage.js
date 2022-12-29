import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import BottomBar from '../components/BottomBar'
import LeftBar from '../components/LeftBar'
import Navbar from '../components/Navbar'
import ExplorePage from './ExplorePage'
import IntroPage from './IntroPage'
import TestPage from './TestPage'
import TuneUP from './TuneUP'


function MainPage() {

    const selectedMenu = useSelector(state => state.menu.menu)
    console.log(selectedMenu)
    function routeMenu() {
        if (selectedMenu) { }
    }

    return (
        <div className='w-full just-xl:max-w-[90%] h-screen'>
            <BrowserRouter>
                <Navbar />
                <div className='flex h-[calc(100%-80px)] w-full flex-row sm:flex-col items-center justify-center  '>
                    <LeftBar />
                    <div className='test h-full w-full  px-6 sm:px-0 rounded-lg  self-center flex flex-row justify-center items-center'>
                        <div className='w-[90%] sm:w-full h-full just-sm:px-5 sm:pb-5 flex flex-row justify-center  bg-sky-50 rounded-lg sm:shadow shadow-lg '>


                            <Routes>
                                <Route path="/*" element={<Navigate to={selectedMenu} />} />
                                <Route path="/home" element={<IntroPage />} />
                                <Route path="/tune-up" element={<TuneUP />} />
                                <Route path="/explore" element={<ExplorePage />} />
                                <Route path="/test" element={<TestPage />} />
                            </Routes>


                        </div>
                    </div>
                    <BottomBar />
                </div>
            </BrowserRouter>

        </div>
    )
}

export default MainPage