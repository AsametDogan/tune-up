import React, { useEffect, useState } from 'react'
import { BsRecordCircleFill, BsCheck2Circle, BsCheck2All } from "react-icons/bs"
import { GiMusicalNotes } from "react-icons/gi"
import { FiSave } from "react-icons/fi"
import { crashSound, snareSound, tom1Sound, tom2Sound, tom3Sound, tom4Sound, kickBassSound } from '../media/mediaIndex';
import { useSelector } from 'react-redux';

function TuneUP() {
  const [test, setTest] = useState("") //animate
  const [sound, setSound] = useState([])
  let soundKeys = [];

  const [startTime, setStartTime] = useState(0)
  const [isRecording, setIsRecording] = useState(false)

  const selectedMenu = useSelector(state => state.menu.menu)

  useEffect(() => { //click a button
    document.addEventListener("keypress", function (event) {
      makeSound(event.key, event.timeStamp);
      handleSaveSound(event.key, event.timeStamp)
    });
  }, [])

  const handleSaveSound = async (key, time) => {
    await soundKeys.push({ key, time })
    setSound(soundKeys)
  }

  useEffect(() => {
    setIsRecording(false)
  }, [selectedMenu])

  // const play = () => {
  //   const firstSoundTime = soundKeys[0].time //first key press time
  //   var time = 0;
  //   var startTime = Date.now();
  //   console.log(startTime)
  //   var interval = setInterval(function () {
  //     var elapsedTime = Date.now() - startTime;
  //     time = (elapsedTime / 1000).toFixed(3);
  //     console.log(time)
  //   }, 10);

  // }


  function makeSound(key, time) {
    switch (key) {
      case "w":
        // play()
        var tom1Audio = new Audio(tom1Sound);
        tom1Audio.play();
        if (startTime.toString.length > 0 && isRecording) {
          console.log("first")
          handleSaveSound(key, (time - startTime))
        }
        else {
          playSound(key)
        }
        break;

      case "a":
        var tom2Audio = new Audio(tom2Sound);
        tom2Audio.play();
        if (startTime.toString.length > 0 && isRecording) {
          handleSaveSound(key, (time - startTime))
        }
        else {
          playSound(key)
        }
        break;

      case "s":
        var tom3Audio = new Audio(tom3Sound);
        tom3Audio.play();
        if (startTime.toString.length > 0 && isRecording) {
          handleSaveSound(key, (time - startTime))
        }
        else {
          playSound(key)
        }
        break;

      case "d":
        var tom4Audio = new Audio(tom4Sound);
        tom4Audio.play();
        if (startTime.toString.length > 0 && isRecording) {
          handleSaveSound(key, (time - startTime))
        }
        else {
          playSound(key)
        }
        break;

      case "j":
        var snareAudio = new Audio(snareSound);
        snareAudio.play();
        if (startTime.toString.length > 0 && isRecording) {
          handleSaveSound(key, (time - startTime))
        }
        else {
          playSound(key)
        }
        break;

      case "k":
        var crashAudio = new Audio(crashSound);
        crashAudio.play();
        if (startTime.toString.length > 0 && isRecording) {
          handleSaveSound(key, (time - startTime))
        }
        else {
          playSound(key)
        }
        break;

      case "l":
        var kickAudio = new Audio(kickBassSound);
        kickAudio.play();
        if (startTime.toString.length > 0 && isRecording) {
          handleSaveSound(key, (time - startTime))
        }
        else {
          playSound(key)
        }
        break;

      default: ;

    }
  }

  function playSound(key) {
    switch (key) {
      case "w":
        // play()
        var tom1Audio = new Audio(tom1Sound);
        tom1Audio.play();
        break;

      case "a":
        var tom2Audio = new Audio(tom2Sound);
        tom2Audio.play();
        break;

      case "s":
        var tom3Audio = new Audio(tom3Sound);
        tom3Audio.play();
        break;

      case "d":
        var tom4Audio = new Audio(tom4Sound);
        tom4Audio.play();
        break;

      case "j":
        var snareAudio = new Audio(snareSound);
        snareAudio.play();
        break;

      case "k":
        var crashAudio = new Audio(crashSound);
        crashAudio.play();
        break;

      case "l":
        var kickAudio = new Audio(kickBassSound);
        kickAudio.play();
        break;

      default: ;

    }
  }

  
  const play = () => {
    sound.forEach(item => {
      setTimeout(() => {
        playSound(item.key, 0)
      }, item.time)
    })
  }

  const handleClickRecord = (e) => {
    if (isRecording) {
      setIsRecording(false)
    }
    else {
      setIsRecording(true)
      setStartTime(e.timeStamp)
    }

  }

  return (
    <>
      <div className='w-full h-full bg-red-100 flex flex-col items-center gap-5'>
        <div className='flex flex-row gap-6 overflow-y-scroll scrollbars-hide' >
          <div className={`${test === "a" ? "animate-ak" : ""} drum  rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1`}>
            a
          </div>
        </div>

        <div className='flex gap-5 items-center rounded-lg bg-slate-50 px-6 py-2.5' >
          <button onClick={handleClickRecord} className='text-4xl text-indigo-600  rounded-full group  outline-none transition-all flex-col flex justify-center items-center'>
            {
              !isRecording ? <><BsRecordCircleFill className='group-hover:bg-indigo-100 p-1.5 rounded-full' /><span className='text-xs'>Record</span></>
                : <><BsCheck2Circle className='group-hover:bg-indigo-100 p-1.5 rounded-full' /><span className='text-xs'>Complete</span></>
            }
          </button>
          <button onClick={play} className="flex justify-center items-center gap-1 hover:animate-bounce text-purple-600 p-1 rounded-lg text-base hover:bg-purple-100 "><GiMusicalNotes /><span className='text-xs'>Test</span></button>
          <div>
            <></>
            <button disabled={true} className='flex items-center gap-1 text-xl text-green-600 p-1 hover:text-green-700 hover:bg-green-200 rounded-lg transition-all'><FiSave /><span className='text-xs'>Save</span></button>

          </div>
        </div>
      </div>
    </>
  )
}

export default TuneUP