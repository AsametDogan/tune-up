import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg"
import { VscSettingsGear } from "react-icons/vsc"
import { MdLogout } from "react-icons/md"
import { setLoggedOut } from '../Stores/User'
import { useDispatch, useSelector } from 'react-redux'
import SettingsModal from './SettingsModal'
import { logo } from '../media/mediaIndex'
function Navbar() {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(setLoggedOut())
  }
  const userName = useSelector(state => state.user.user.name)
  const selectedMenu = useSelector(state => state.user.isLogged)
  const [openSettings, setOpenSettings] = useState(false)

  return (
    <>
      <div className='w-full px-6 sm:px-4 py-2 mb-5 sm:mb-0 flex flex-row justify-between border-b items-center '>
        <div className='flex flex-row justify-center items-center gap-1 group:'>
          <div className='h-10 w-10'>
            <img src={logo} alt="logo" />
          </div>
          <span className='text-xl font-bold border-b px-2'> Tune-UP</span>

        </div>
        <div className='group '><button className='outline-none focus:outline-none border flex items-center text-xl opacity-70 rounded-full hover:bg-indigo-200 hover:opacity-95 py-2 px-2.5'><CgProfile /></button>
          <ul
            className="bg-white border -translate-x-12 rounded-md transform scale-0 group-focus:scale-100 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top flex flex-col p-1 items-center justify-center min-w-[100px]"
          >
            <span className='w-full px-2 py-1 font-semibold border-b'>{userName || "user"}</span>
            <button onClick={() => setOpenSettings(true)} className="w-full rounded-lg px-2 py-1 hover:bg-gray-100 text-start flex items-center gap-1 "><VscSettingsGear />Settings</button>
            <button onClick={handleLogout} className="w-full rounded-lg px-2 py-1 hover:bg-gray-100 text-start flex items-center gap-1 group"><MdLogout className='group-hover:animate-pulse' />Log out</button>
          </ul>
        </div>
      </div>
      <SettingsModal isOpen={openSettings} setIsOpen={setOpenSettings} />
    </>
  )
}

export default Navbar