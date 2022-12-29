import React from 'react'
import SoundService from '../services/sound.service'
import UserMusicPost from '../components/UserMusicPost'
import { useSelector } from 'react-redux'

function UserSounds() {
  const [musics, setMusic] = React.useState([])
  const {user} = useSelector((state) => state.user)
  React.useEffect(() => {
    getMusics()
  }, [])

  const getMusics = () => {
    SoundService.getUserSounds(user.id)
    .then((response) => {
      setMusic(response.data.sounds)
      console.log(response.data)
    })
    .catch((e) => {
      console.log(e)
    })
  }

  const changePublic = (id, isPublic) => {
    SoundService.changePublic(id, isPublic)
      .then((response) => {
        getMusics()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteSound = (id) => {
    SoundService.deleteSound(id)
      .then((response) => {
        getMusics()
      })
      .catch((e) => {
        console.log(e)
      })
  }

    
  return (
    <div className='w-full flex flex-col gap-3 sm:gap-0.5 overflow-y-scroll scrollbar-hide'>
      {musics.map((music) => <UserMusicPost key={music._id} music={music} id={music._id} changePublic={changePublic} deleteSound={deleteSound} />)}
    </div>
  )
}

export default UserSounds