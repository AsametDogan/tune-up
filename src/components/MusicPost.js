import React from 'react'
import { nullMusicUser } from '../media/mediaIndex'
import { BsPlayCircle } from "react-icons/bs";
function MusicPost({ music }) {

    //id: ownerId:  name: description: data: createdAt: color: liker: unliker: isPublic:



    return (
        <div className='w-full flex flex-col rounded-md px-3 py-4 gap-2 border  shadow-sm bg-white hover:shadow transition-all duration-300'>
            <div className='w-full flex flex-row  items-center gap-3 sm:gap-2'>
                <div className='rounded-full w-7 h-7 bg-gray-100 px-1 flex items-center justify-center shadow'>
                    <img src={nullMusicUser} alt='profile-picture'></img>
                </div>
                <h3 className='text-base font-semibold text-gray-800'>Kullanici</h3>
            </div>
            <h4 className='px-1 text-[15px] text-gray-700'>{music.name}</h4>
            <div><button><BsPlayCircle /></button></div>
            
            <div>
            <p className='text-sm text-gray-600'>{music.description}</p>
            </div>
        </div>
    )
}

export default MusicPost