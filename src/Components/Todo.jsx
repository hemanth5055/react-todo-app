import React from "react";
import Background from "./Background";
import Foreground from "./Foreground";

function Todo() {
  return (
    <div className="w-full h-screen relative bg-zinc-800">
      <Background></Background>
      <Foreground></Foreground>
    </div>
  );
}

export default Todo;
