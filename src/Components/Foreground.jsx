import React, { useEffect, useRef, useState } from "react";
import { MdAddTask } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Taskcards from "./Taskcards";
import { v4 as uuidv4 } from "uuid";

function Foreground() {
  const [popup, setPopup] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [tag, setTag] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [color, setColor] = useState("orange");
  useEffect(() => {
    if (localStorage.getItem("tasksLocal") == null) {
      localStorage.setItem("tasksLocal", JSON.stringify(tasks));
    } else {
      setTasks(JSON.parse(localStorage.getItem("tasksLocal")));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasksLocal", JSON.stringify(tasks));
  }, [tasks]);
  const validateTask = () => {
    if (task.length > 0) {
      let temp = {
        Id: uuidv4(),
        Name: task,
        Tag: tag,
        Color: color,
        Date: date,
      };
      setTasks((prev) => [...prev, temp], console.log(tasks));
      resetInp();
    }
  };
  const resetInp = () => {
    setTask("");
    setTag("");
    setColor("green");
    setDate(new Date().toISOString().slice(0, 10));
  };
  const removeElement = (red) => {
    console.log(red);
    let updatedtasks = tasks.filter((tr) => tr.Id != red);
    setTasks(updatedtasks);
  };
  const reference = useRef();
  return (
    <div
      className="w-full h-screen fixed z-[3] p-6 flex flex-wrap gap-[40px]"
      ref={reference}
    >
      <div
        className="absolute w-[50px] h-[40px] bg-slate-300 rounded-full select-none bottom-5 right-5 flex justify-center items-center cursor-pointer"
        onClick={() => {
          setPopup(true);
        }}
      >
        <MdAddTask size="1.5vw" />
      </div>
      {popup ? (
        <div className="w-[600px] h-[350px] bg-zinc-900 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-[30px] flex flex-col px-4 py-6 justify-between z-10">
          <div className="w-full  flex justify-end">
            <div
              className="w-[50px] h-[40px] bg-slate-300 rounded-full select-none flex justify-center items-center cursor-pointer "
              onClick={() => {
                setPopup(false);
              }}
            >
              <IoClose size="1.5vw" />
            </div>
          </div>

          <div className="w-full flex flex-col px-[20px] gap-[20px]">
            <input
              type="text"
              className="h-[40px] bg-slate-400  outline-none text-slate-800 font-mont text-[1.4vw] px-[10px] rounded-lg placeholder:text-slate-800 font-semibold"
              placeholder="Task.."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <input
              type="date"
              name="due"
              id="due"
              className="h-[40px] px-[10px] font-mont bg-slate-400 rounded-lg outline-none font-semibold"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().slice(0, 10)}
            />
          </div>

          <div className="w-full-black px-[20px] flex justify-between">
            <select
              name="importance"
              id="important"
              className="outline-none w-[20%] h-[40px] px-[10px] bg-slate-400 rounded-lg text-[1.2vw] font-mont font-semibold"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="green">Green</option>
              <option value="indigo">Indigo</option>
            </select>
            <input
              type="text"
              className="w-[25%] h-[40px] px-[10px] bg-slate-400 rounded-lg text-slate-800 outline-none text-[1.2vw] font-mont placeholder:text-slate-800 font-semibold"
              placeholder="Tag.."
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </div>

          <div
            className="w-full px-[20px] flex justify-center cursor-pointer"
            onClick={() => validateTask()}
          >
            <h1 className="bg-slate-300 px-4 py-2 font-mont rounded-lg font-semibold">
              {" "}
              Add Task
            </h1>
          </div>
        </div>
      ) : null}
      {tasks.map((taskitem) => {
        return (
          <Taskcards
            tk={taskitem}
            key={taskitem.Id}
            refe={reference}
            tasks={tasks}
            removeElement={removeElement}
          ></Taskcards>
        );
      })}
    </div>
  );
}

export default Foreground;
