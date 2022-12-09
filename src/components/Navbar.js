import React from 'react'
import { CgProfile } from "react-icons/cg"
function Navbar() {
  return (
    <>
      <div className='w-full px-6 my-2 flex flex-row justify-between border-x items-center'>
        <div className='flex flex-row'>
        <span className='text-xl font-bold'>Tune-UP</span>
       
        </div>
        <div><div className='text-lg rounded-full hover:bg-indigo-200 p-2'><CgProfile /></div></div>
      </div>
    </>
  )
}

export default Navbar