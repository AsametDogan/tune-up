import React, { useState } from 'react'
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
    const [tab, setTab] = useState("login")
    
    return (
        < >
            <div className='w-full h-screen flex flex-col items-center'>


                <Header setTab={setTab} />
                {
                    tab === "login" ? <Login /> : <Signup />
                }

            </div>
        </>
    )
}

export default StartPage