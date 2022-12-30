import React, { useEffect, useState } from "react";
import {
  BsRecordCircleFill,
  BsCheck2Circle,
  BsCheck2All,
} from "react-icons/bs";
import { GiMusicalNotes } from "react-icons/gi";
import { FiSave } from "react-icons/fi";
import {
  crashSound,
  snareSound,
  tom1Sound,
  tom2Sound,
  tom3Sound,
  tom4Sound,
  kickBassSound,
} from "../media/mediaIndex";
import { useSelector } from "react-redux";
import SoundService from "../services/sound.service";

function TuneUP() {
  const [test, setTest] = useState(""); //animate
  const [sound, setSound] = useState([]);
  let soundKeys = [];

  const [startTime, setStartTime] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  let a = false;

  const selectedMenu = useSelector((state) => state.menu.menu);

  useEffect(() => {
    console.log(sound);
  }, [sound]);

  const ss = (event, isRecord) => {
    if (selectedMenu === "tune-up") {
      //work just in tune-up page
      //makeSound(event.key, event.timeStamp);
      if (isRecord) {
        makeSound(event.key, event.timeStamp);
        return;
      } else {
        playSound(event.key, event.timeStamp);
        return;
      }
    }
  };

  useEffect(() => {
    function playS(event) {
      ss(event, isRecording);
    }

    document.addEventListener("keydown", playS);

    return () => document.removeEventListener("keydown", playS); //react useeffect addeventlistener delete
  }, [isRecording]);

  const handleSaveSound = (key, time) => {
    //console.log("first")
    //soundKeys.push({ key, time })
    console.log("first");
    setSound((prev) => [...prev, { key, time }]);
  };

  useEffect(() => {
    setIsRecording(false);
  }, [selectedMenu]);

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
    console.log("makeSound function with " + key + " " + time);

    switch (key) {
      case "w":
        // play()
        var tom1Audio = new Audio(tom1Sound);
        tom1Audio.play();

        handleSaveSound(key, time - startTime);

        break;

      case "a":
        var tom2Audio = new Audio(tom2Sound);
        tom2Audio.play();
        handleSaveSound(key, time - startTime);
        break;

      case "s":
        var tom3Audio = new Audio(tom3Sound);
        tom3Audio.play();
        handleSaveSound(key, time - startTime);

        break;

      case "d":
        var tom4Audio = new Audio(tom4Sound);
        tom4Audio.play();
        handleSaveSound(key, time - startTime);

        break;

      case "j":
        var snareAudio = new Audio(snareSound);
        snareAudio.play();
        handleSaveSound(key, time - startTime);

        break;

      case "k":
        var crashAudio = new Audio(crashSound);
        crashAudio.play();
        handleSaveSound(key, time - startTime);

        break;

      case "l":
        var kickAudio = new Audio(kickBassSound);
        kickAudio.play();
        handleSaveSound(key, time - startTime);

        break;

      default:
    }
  }

  function playSound(key) {
    console.log("playSound function with " + key);
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

      default:
    }
  }

  const SaveSound = () => {
    console.log("save sound");
    console.log(sound);
    const name = prompt("Enter sound name");
    const description = prompt("Enter sound description");
    SoundService.create({ data: sound, name, description, isPublic: true })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const play = () => {
    sound.forEach((item) => {
      setTimeout(() => {
        playSound(item.key, 0);
      }, item.time);
    });
  };

  const handleClickRecord = (e) => {
    if (isRecording) {
      setIsRecording(false);
    } else {
      setIsRecording(true);
      setSound([]);
      setStartTime(e.timeStamp);
    }
  };

  const handleClickButton = (e) => {
    console.log(e.target);
    console.log(e.target.id);
    ss({ ...e, key: e.target.id }, isRecording);
  };

  return (
    <>
      <div className="w-full h-full bg-red-100 flex flex-col items-center gap-5">
        <div className="flex flex-wrap gap-6 overflow-y-scroll scrollbars-hide">
          <div
            onClick={handleClickButton}
            id={"w"}
            className={` drum  rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1`}
          >
            w
          </div>
          <div
            onClick={handleClickButton}
            id={"a"}
            className={` drum  rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1`}
          >
            a
          </div>
          <div
            onClick={handleClickButton}
            id={"s"}
            className={`drum  rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1`}
          >
            s
          </div>
          <div
            onClick={handleClickButton}
            id={"d"}
            className={` drum  rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1`}
          >
            d
          </div>
          <div
            onClick={handleClickButton}
            id={"j"}
            className={` drum  rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1`}
          >
            j
          </div>
          <div
            onClick={handleClickButton}
            id={"k"}
            className={` drum  rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1`}
          >
            k
          </div>
          <div
            onClick={handleClickButton}
            id={"l"}
            className={` drum  rounded-full w-20 h-20 shadow-md cursor-pointer bg-cyan-600 hover:bg-cyan-300 duration-200 transition-all flex items-center justify-center text-center pb-1`}
          >
            l
          </div>
        </div>

        <div className="flex gap-5 items-center rounded-lg bg-slate-50 px-6 py-2.5">
          <button
            onClick={handleClickRecord}
            className="text-4xl text-indigo-600  rounded-full group  outline-none transition-all flex-col flex justify-center items-center"
          >
            {!isRecording ? (
              <>
                <BsRecordCircleFill className="group-hover:bg-indigo-100 p-1.5 rounded-full" />
                <span className="text-xs">Record</span>
              </>
            ) : (
              <>
                <BsCheck2Circle className="group-hover:bg-indigo-100 p-1.5 rounded-full" />
                <span className="text-xs">Complete</span>
              </>
            )}
          </button>
          <button
            onClick={play}
            className="flex justify-center items-center gap-1 hover:animate-bounce text-purple-600 p-1 rounded-lg text-base hover:bg-purple-100 "
          >
            <GiMusicalNotes />
            <span className="text-xs">Test</span>
          </button>
          <div>
            <></>
            <button
              onClick={SaveSound}
              disabled={sound.length <= 0}
              className="flex items-center gap-1 text-xl text-green-600 p-1 hover:text-green-700 hover:bg-green-200 rounded-lg transition-all"
            >
              <FiSave />
              <span className="text-xs">Save</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TuneUP;
