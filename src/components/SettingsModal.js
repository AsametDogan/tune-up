import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { nullMusicUser } from '../media/mediaIndex'
import { FiEdit, FiCheckSquare } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai"
import { BsUpload } from 'react-icons/bs';

function SettingsModal({ isOpen, setIsOpen }) {
    const user = useSelector(state => state.user.user)
    const [userName, setUserName] = useState(user.username)
    const [name, setName] = useState(user.name)
    const [surname, setSurname] = useState(user.surname)
    const [profilePhoto, setProfilePhoto] = useState(user.profilePhoto)
    const [userImage,setUserImage]=useState()
    const [editable, setEditable] = useState(false)

    const handleClickEdit = () => {
        setEditable(!editable)
    }


    const handleClickClose = () => {
        setEditable(false)
        setIsOpen(false)
    }

    return (
        isOpen ? (
            <>
                <div

                    className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-full my-6 mx-auto max-w-3xl h-[85%] flex justify-center">
                        <div className="items-center content-center place-content-center self-center h-full p-5 sm:gap-6 just-sm:gap-10 sm:p-2 overflow-y-scroll scrollbar-hide border-0 rounded-lg shadow-lg relative flex flex-col w-[95%] bg-white outline-none focus:outline-none">
                            <div className='px-8 border-b-2 animate-bounce '>
                                <span className='text-2xl font-semibold '>Settings</span>
                            </div>
                            {
                                editable ?
                                    <label for="dropzone-file" className="flex flex-col justify-center items-center w-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                            <BsUpload className="text-gray-600" />
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {`${userImage?.name || "SVG, PNG, JPG or GIF (MAX. 800x400px)"}`}
                                            </p>
                                        </div>
                                        <input
                                            id="dropzone-file"
                                            type="file"
                                            className="hidden"
                                            onChange={(event) => { setUserImage(event.target.files[0]) }} />
                                    </label>
                                    :
                                    <div className='p-5 sm:p-4 rounded-full bg-gray-200 border w-28 h-28 sm:w-20 sm:h-20 flex justify-center'>
                                        <img className='w-full h-full' src={user.profilePhoto || nullMusicUser} />
                                    </div>

                            }


                            <div className='flex flex-col w-full gap-4'> {/* form */}
                                <div className='flex flex-wrap justify-around gap-4'>
                                    <input
                                        className={`py-2 px-2.5 ${editable ? "border-violet-400 bg-violet-100" : ""} border bg-slate-100 focus:bg-violet-100 outline-violet-400  rounded-lg`}

                                        value={name || "name"} type={"text"}
                                        disabled={!editable}
                                    >

                                    </input>
                                    <input
                                        className={`py-2 px-2.5 ${editable ? "border-violet-400 bg-violet-100" : ""} border bg-slate-100 focus:bg-violet-100 outline-violet-400  rounded-lg`}
                                        value={surname || "surname"} type={"text"}
                                        disabled={!editable}
                                    >
                                    </input>
                                </div>
                                <div className='flex flex-wrap justify-around gap-4'>
                                    <input
                                        className={`py-2 px-2.5 ${editable ? "border-violet-400 bg-violet-100" : ""} border bg-slate-100 focus:bg-violet-100 outline-violet-400  rounded-lg`}
                                        value={userName || "userName"} type={"text"}
                                        disabled={!editable}
                                    >
                                    </input>
                                    <input
                                        className={`py-2 px-2.5 ${editable ? "border-violet-400 bg-violet-100" : ""} border bg-slate-100 focus:bg-violet-100 outline-violet-400  rounded-lg`}
                                        value={user.birthday || "birthday"} type={"text"}
                                        disabled={!editable}
                                    >
                                    </input>

                                </div>
                                <div className='flex flex-wrap justify-around gap-4'>
                                    <input
                                        className='py-2 px-2.5 bg-gray-100 border focus:outline-1 outline-violet-400  rounded-lg'
                                        value={user.email || "email"} type={"text"}
                                        disabled={true}
                                    >
                                    </input>
                                    <input
                                        className='py-2 px-2.5 bg-gray-100 border focus:outline-1 outline-violet-400  rounded-lg'
                                        value={user.createdAt || "createdDate"} type={"text"}
                                        disabled={true}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div className='w-full flex justify-around gap-4'>
                                <button
                                    onClick={handleClickClose}
                                    className=' flex justify-center items-center gap-1 rounded-lg px-3 py-2 transition-all bg-red-200 hover:bg-red-400 text-red-600 hover:text-white '>
                                    <AiOutlineCloseCircle className='flex items-center' />
                                    Close
                                </button>
                                <button
                                    onClick={handleClickEdit}
                                    className={` flex justify-center items-center gap-2 ${editable ? "bg-emerald-200 hover:bg-emerald-400 text-emerald-600 hover:text-emerald-50" : "bg-violet-200 hover:bg-violet-400 text-violet-600 hover:text-violet-50"}  transition-all   rounded-lg px-3 py-2`}
                                >
                                    {editable ? (<><FiCheckSquare className='' /> <span>Complete</span> </>) : (<><FiEdit /> <span>Edit</span> </>)}

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null
    )
}

export default SettingsModal