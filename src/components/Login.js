import React, { useState } from 'react'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md"
import { FcGoogle } from "react-icons/fc";

function Login() {
    const [isVisible, setIsVisible] = useState(false)

    const handleChangeVisibility = () => {
        //convert to contrast visibility of password // true or false
        setIsVisible(!isVisible)
    }

    return (
        <div className='h-4/5'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <h3 className='font-bold text-3xl mb-6'>Login and Tune-UP</h3>
                <form className='flex flex-col gap-4 min-w-[230px]'>
                    <input type={"text"} className='px-3 py-2 outline-none rounded-lg border border-transparent focus:border-indigo-600 bg-indigo-200 transition-all duration-200' placeholder='Mail'></input>
                    <div className='flex flex-row w-full items-center '>
                        <input type={`${isVisible ? "text" : "password"}`} className='w-full px-3 py-2 outline-none rounded-l-lg border border-transparent focus:border-indigo-600 bg-indigo-200 transition-all duration-200' placeholder='Password'></input>
                        <div className='flex rounded-r-lg h-full border border-transparent focus:border-indigo-600 bg-indigo-200 items-center'>
                            {
                                isVisible ?
                                    <MdOutlineVisibility onClick={handleChangeVisibility} className='mr-2 opacity-60 hover:opacity-100 cursor-pointer text-base' />
                                    :
                                    <MdOutlineVisibilityOff onClick={handleChangeVisibility} className='mr-2 opacity-60 hover:opacity-100 cursor-pointer text-base' />

                            }
                        </div>
                    </div>

                    <button
                        onClick={() => console.log("form submit button")}
                        className='bg-indigo-600 font-semibold text-base px-2 py-1.5 rounded-lg mt-3 border-2 border-transparent text-white hover:border-indigo-800 hover:bg-indigo-300 hover:text-indigo-800 transition-all duration-200' >Start Tune-UP</button>
                    <button className='flex flex-row items-center justify-around border-2 bg-gradient-to-r from-gray-100 via-gray-200-600 to-gray-50 hover:from-indigo-200 hover:via-purple-300 hover:to-gray-200  rounded-lg w-full py-1.5 px-2 transition-all duration-500'><span>Login with Google</span><FcGoogle className='text-lg' /></button>
              
                </form>
            </div>
        </div>
    )
}

export default Login