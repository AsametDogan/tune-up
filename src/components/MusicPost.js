import React from 'react'

function MusicPost({ music }) {

    //id: ownerId:  name: description: data: createdAt: color: liker: unliker: isPublic:



    return (
        <div className='w-full flex flex-col rounded-md px-3 border py-4 shadow-sm bg-white hover:shadow transition-all duration-300'>
            <div className=''>
        {music.description}
            </div>
        </div>
    )
}

export default MusicPost