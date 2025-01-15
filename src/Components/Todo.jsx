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
      <div className="w-full h-screen relative bg-gray-400 bg-zinc-800 ">
        <Background></Background>
        <Foreground></Foreground>
      </div>
    </>
  );
}

export default Todo;
