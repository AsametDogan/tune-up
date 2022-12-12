import React from 'react'
import { CgProfile } from "react-icons/cg"
import { VscSettingsGear } from "react-icons/vsc"
import { MdLogout } from "react-icons/md"
import { setLoggedOut } from '../Stores/User'
import { useDispatch, useSelector } from 'react-redux'
function Navbar() {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(setLoggedOut())
  }

const selectedMenu = useSelector(state => state.user.isLogged)
console.log(selectedMenu)
  return (
    <>
      <div className='w-full px-6 sm:px-4 py-2 mb-5 sm:mb-0 flex flex-row justify-between border-b items-center '>
        <div className='flex flex-row'>
          <span className='text-xl font-bold'>Tune-UP</span>

        </div>
        <div className='group '><button className='outline-none focus:outline-none border flex items-center text-xl opacity-70 rounded-full hover:bg-indigo-200 hover:opacity-95 py-2 px-2.5'><CgProfile /></button>
          <ul
            className="bg-white border -translate-x-12 rounded-md transform scale-0 group-focus:scale-100 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top flex flex-col p-1 items-start min-w-20"
          >
            <button className="w-full rounded-lg px-2 py-1 hover:bg-gray-100 text-start flex items-center gap-1 "><VscSettingsGear />Settings</button>
            <button onClick={handleLogout} className="w-full rounded-lg px-2 py-1 hover:bg-gray-100 text-start flex items-center gap-1 group"><MdLogout className='group-hover:animate-pulse' />Log out</button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar