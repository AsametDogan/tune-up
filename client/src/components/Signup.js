import React, { useEffect, useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
// import { signInWithGoogle, auth, provider, addUserData, registerUser } from '../firebase';
import { useForm } from "react-hook-form";
import { drumHeart } from "../media/mediaIndex";
// import { collectionGroup } from 'firebase/firestore';
import AuthService from "../services/auth.service";
import { useDispatch } from "react-redux";
import { login } from "../Stores/User";
import axios from "axios";

function Signup() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);
  /*     const loginGoogle = (e) => {
        e.preventDefault()

      //  console.log(signInWithGoogle(auth, provider))
    } */

  const onSubmit = (data) => {
    AuthService.register(data.name, data.email, data.password).then((res) => {
      AuthService.login(data.email, data.password)
        .then((res) => {
          axios.defaults.headers.common["Authorization"] = res.data.token;
          dispatch(login({ name: res.data.name, email: res.data.email, id: res.data.id }));
        })
        .catch((err) => {
          console.log("hataa"+err);
        });
    });

    // registerUser('emurat.uzun@gmail.com', 'deneme123');
    // addUserData(data.nickname, data.email, "", "")
  };

  const handleChangeVisibility = () => {
    //convert to contrast visibility of password // true or false
    setIsVisible(!isVisible);
  };

  return (
    <div className="h-[90%] w-[80%] md:w-[90%] sm:w-full">
      <div className="flex flex-col justify-center items-center w-full h-full overflow-x-hidden overflow-y-scroll scrollbar-hide rounded-lg bg-white mt-3 shadow-md py-2 px-8 sm:px-3">
        <h3 className="font-bold text-3xl mb-6 sm:mb-0">
          Register and Tune-UP
        </h3>
        <div className="flex flex-wrap gap-6 sm:gap-3 justify-center items-scenter">
          <div className="w-[300px] flex flex-col items-start justify-center">
            <img className="" src={drumHeart}></img>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 min-w-[230px] justify-center"
          >
            <input
              required
              {...register("name")}
              type={"text"}
              className="px-3 py-2 outline-none rounded-lg border border-transparent focus:border-indigo-600 bg-indigo-200 transition-all duration-200"
              placeholder="Nickname"
            ></input>
            <input
              required
              {...register("email")}
              type={"mail"}
              className="px-3 py-2 outline-none rounded-lg border border-transparent focus:border-indigo-600 bg-indigo-200 transition-all duration-200"
              placeholder="Mail"
            ></input>
            <div className="flex flex-row w-full items-center ">
              <input
                required
                {...register("password")}
                type={`${isVisible ? "text" : "password"}`}
                className="w-full px-3 py-2 outline-none rounded-l-lg border border-transparent focus:border-indigo-600 bg-indigo-200 transition-all duration-200"
                placeholder="Password"
              ></input>
              <div className="flex rounded-r-lg h-full border border-transparent focus:border-indigo-600 bg-indigo-200 items-center">
                {isVisible ? (
                  <MdOutlineVisibility
                    onClick={handleChangeVisibility}
                    className="mr-2 opacity-60 hover:opacity-100 cursor-pointer text-base"
                  />
                ) : (
                  <MdOutlineVisibilityOff
                    onClick={handleChangeVisibility}
                    className="mr-2 opacity-60 hover:opacity-100 cursor-pointer text-base"
                  />
                )}
              </div>
            </div>

            <button
              type="submit"
              onClick={() => console.log("boş")}
              className="bg-indigo-600 font-semibold text-base px-2 py-1.5 rounded-lg mt-3 border border-transparent text-white hover:border-indigo-800 hover:bg-indigo-300 hover:text-indigo-800 transition-all duration-200"
            >
              Sign Tune-UP
            </button>
            {/*  <button onClick={loginGoogle} className='flex flex-row items-center justify-around border-2 bg-gradient-to-r from-gray-100 via-gray-200-600 to-gray-50 hover:from-indigo-200 hover:via-purple-300 hover:to-gray-200  rounded-lg w-full py-1.5 px-2 transition-all duration-500'><span>Signup with Google</span><FcGoogle className='text-lg' /></button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
