import React, { useEffect, useState } from "react";
import Background from "./Background";
import Foreground from "./Foreground";
import { IoMoon } from "react-icons/io5";
import { BsFillSunFill } from "react-icons/bs";
function Todo() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    darkModeHandler();
  },[]);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <div className="w-full h-screen relative bg-gray-400 dark:bg-zinc-800 ">
        <Background></Background>
        <Foreground></Foreground>
      </div>
      <button
        onClick={() => darkModeHandler()}
        className="absolute top-5 right-0 z-10 bg-slate-200 p-3 rounded-l-full cursor-pointer dark:bg-black outline-none"
      >
        {
          dark && <BsFillSunFill className="dark:text-gray-300" /> // render sunny when dark is true
        }
        {
          !dark && <IoMoon /> // render moon when dark is false
        }
      </button>
    </>
  );
}

export default Todo;
