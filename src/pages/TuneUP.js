import React, { useEffect, useState } from 'react'
import { crashSound, snareSound, tom1Sound, tom2Sound, tom3Sound, tom4Sound, kickBassSound, } from '../media/mediaIndex';

function TuneUP() {
  const [test, setTest] = useState("")
  const [sound, setSound] = useState("")
  let soundKeys = [];

  
  useEffect(()=>{
    document.addEventListener("keypress", function (event) {
       makeSound(event.key, event.timeStamp);
       //handleSaveSound(event.key, event.timeStamp)
       console.log(event)
     });
  },[])

  const handleSaveSound = (key, time) => {
    soundKeys.push({ key, time })
    console.log(soundKeys)
    setSound(soundKeys)
  }




  const play = () => {
    const firstSoundTime = soundKeys[0].time //first key press time
    var time = 0;
    var startTime = Date.now();
    console.log(startTime)
    var interval = setInterval(function () {
      var elapsedTime = Date.now() - startTime;
      time = (elapsedTime / 1000).toFixed(3);
      console.log(time)
    }, 10);
    console.log("time")


  }
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      const counter = count + 0.01;
      setCount(counter);
    }, 10);
    return () => clearTimeout(timer);
  });

  function makeSound(key, time) {
    console.log(key)
    switch (key) {
      case "w":
       // play()
        var tom1Audio = new Audio(tom1Sound);
        tom1Audio.play();
        handleSaveSound(key, time)
        break;

      case "a":
        var tom2Audio = new Audio(tom2Sound);
        tom2Audio.play();
        handleSaveSound(key, time)
        break;

      case "s":
        var tom3Audio = new Audio(tom3Sound);
        tom3Audio.play();
        handleSaveSound(key, time)
        break;

      case "d":
        var tom4Audio = new Audio(tom4Sound);
        tom4Audio.play();
        handleSaveSound(key, time)
        break;

      case "j":
        var snareAudio = new Audio(snareSound);
        snareAudio.play();
        handleSaveSound(key, time)
        break;

      case "k":
        var crashAudio = new Audio(crashSound);
        crashAudio.play();
        handleSaveSound(key, time)
        break;

      case "l":
        var kickAudio = new Audio(kickBassSound);
        kickAudio.play();
        handleSaveSound(key, time)
        break;

      default: ;

    }
  }

  const baslat = ()=>{
    sound.forEach(item=>{
      setTimeout(()=>{
        makeSound(item.key,0)
      },item.time)
    })
  }


  return (
    <div className='w-full h-full bg-red-100 flex flex-col items-center gap-5'>
      <div className='flex flex-row gap-6' >
        <div className={`${test === "a" ? "animate-ak" : ""} drum  rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1`}> a </div>
      </div>
      <div className='flex flex-row gap-6' >
      </div>
    </div>
  )
}

export default TuneUP