import React from 'react'
import MusicPost from '../components/MusicPost'

function ExplorePage() {
  const musics = [
    {
      id: 1,
      ownerId: 21,
      name: "test music",
      description: "this music which I have been played best in my life",
      data: [],
      createdAt: "12.12.2022",
      color: "red",
      liker: [1, 2, 9, 3, 4, 5],
      unliker: [2, 5, 6, 1, 2, 35, 66],
      isPublic: true,

    },
    {
      id: 12,
      ownerId: 21,
      name: "test music",
      description: "this music which I have been played best in my life",
      data: [],
      createdAt: "12.12.2022",
      color: "red",
      liker: [1, 2, 9, 3, 4, 5],
      unliker: [2, 5, 6, 1, 2, 35, 66],
      isPublic: true,

    },
    {
      id: 3,
      ownerId: 21,
      name: "test music",
      description: "this music which I have been played best in my life",
      data: [],
      createdAt: "12.12.2022",
      color: "red",
      liker: [1, 2, 9, 3, 4, 5],
      unliker: [2, 5, 6, 1, 2, 35, 66],
      isPublic: true,

    },
    {
      id: 4,
      ownerId: 21,
      name: "test music",
      description: "this music which I have been played best in my life",
      data: [],
      createdAt: "12.12.2022",
      color: "red",
      liker: [1, 2, 9, 3, 4, 5],
      unliker: [2, 5, 6, 1, 2, 35, 66],
      isPublic: true,

    },
    {
      id: 5,
      ownerId: 21,
      name: "test music",
      description: "this music which I have been played best in my life",
      data: [],
      createdAt: "12.12.2022",
      color: "red",
      liker: [1, 2, 9, 3, 4, 5],
      unliker: [2, 5, 6, 1, 2, 35, 66],
      isPublic: true,

    },
    {
      id: 15,
      ownerId: 21,
      name: "test music",
      description: "this music which I have been played best in my life",
      data: [],
      createdAt: "12.12.2022",
      color: "red",
      liker: [1, 2, 9, 3, 4, 5],
      unliker: [2, 5, 6, 1, 2, 35, 66],
      isPublic: true,

    },
    {
      id: 9,
      ownerId: 21,
      name: "test music",
      description: "this music which I have been played best in my life",
      data: [],
      createdAt: "12.12.2022",
      color: "red",
      liker: [1, 2, 9, 3, 4, 5],
      unliker: [2, 5, 6, 1, 2, 35, 66],
      isPublic: true,

    },
  ]


  return (
    <div className='w-full flex flex-col gap-3 sm:gap-0.5 overflow-y-scroll scrollbar-hide'>
      {
        musics.map((music) => (
          <MusicPost music={music} id={music.id} />
        ))
      }
    </div>
  )
}

export default ExplorePage