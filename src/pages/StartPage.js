import React from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import Signup from '../components/Signup'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";

function StartPage() {
    return (
        < >
            <div className='w-full h-screen flex flex-col items-center'>
                <BrowserRouter>

                    <Header />
                    <Routes>
                        <Route path="/*" element={<>test</>}></Route>
                        <Route path="/sign-up" element={<Signup />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default StartPage