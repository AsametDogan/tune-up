import React from "react";
import { nullMusicUser } from "../media/mediaIndex";
import { BsPlayCircle } from "react-icons/bs";
import {
  crashSound,
  snareSound,
  tom1Sound,
  tom2Sound,
  tom3Sound,
  tom4Sound,
  kickBassSound,
} from "../media/mediaIndex";
function MusicPost({ music }) {
  //id: ownerId:  name: description: data: createdAt: color: liker: unliker: isPublic:
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
  const play = (sound) => {
    sound.forEach((item) => {
      setTimeout(() => {
        playSound(item.key, 0);
      }, item.time);
    });
  };

  return (
    <div className="w-full flex flex-col rounded-md px-3 py-4 gap-2 border  shadow-sm bg-white hover:shadow transition-all duration-300">
      <div className="w-full flex flex-row  items-center gap-3 sm:gap-2">
        <div className="flex flex-row h-28 w-28  rounded-full p-1 bg-gray-50 border" >
          <nullMusicUser />
        </div>
        <h3 className="text-base font-semibold text-gray-800">
          {music.userId.name}
        </h3>
      </div>
      <h4 className="text-[15px] text-gray-700">{music.name}</h4>
      <div>
        <button
          onClick={() => {
            play(music.data);
          }}
        >
          <BsPlayCircle  className="text-base" />
        </button>
      </div>

      <div>
        <p className="text-sm text-gray-600">{music.description}</p>
      </div>
    </div>
  );
}

export default MusicPost;
