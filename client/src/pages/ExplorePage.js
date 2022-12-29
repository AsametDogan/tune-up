import React from 'react'
import MusicPost from '../components/MusicPost'
import SoundService from '../services/sound.service'


function ExplorePage() {

  const [musics, setMusic] = React.useState([])
  React.useEffect(() => {
    SoundService.getAll()
      .then((response) => {
        setMusic(response.data.sounds)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])


  return (
    <div className='w-full flex flex-col gap-3 sm:gap-0.5 overflow-y-scroll scrollbar-hide'>
      {
        musics.map((music) => (
          <MusicPost key={music._id} music={music} id={music._id} />
        ))
      }
    </div>
  )
}

export default ExplorePage