import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { LuTag } from "react-icons/lu";
import { motion } from "motion/react";

function Taskcards({ tk, refe, removeElement }) {
  function calculateDaysBetweenDates(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    if (isNaN(startDate) || isNaN(endDate)) {
      throw new Error("Invalid date format. Please use YYYY-MM-DD.");
    }

    const differenceInMilliseconds = endDate - startDate;

    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

    return Math.abs(Math.floor(differenceInDays));
  }
  return (
    <motion.div
      className="relative w-60 h-72 overflow-hidden bg-zinc-900 rounded-[45px] text-white px-5 py-5 z-3"
      drag
      dragConstraints={refe}
      whileDrag={{ scale: 1.05 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
    >
      <div className="flex w-full flex-col justify-between h-[75%]">
        <div className="w-full flex justify-end">
          <div
            className="h-[45px] w-[45px] bg-black rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => {
              removeElement(tk.Id);
            }}
          >
            <MdDeleteOutline size="1.8vw" color="gray" />
          </div>
        </div>
        <p className="eading-tight  text-zinc-400  font-mont text-[1.8vw] font-semibold leading-[2rem] select-none">
          {tk.Name}
        </p>
        <div className="w-full flex justify-between px-[2px] items-center">
          <h2 className="text-[0.9vw] font-mont text-slate-500 font-[550] select-none">
            {calculateDaysBetweenDates(
              new Date().toISOString().slice(0, 10),
              tk.Date
            )}{" "}
            Days left
          </h2>
          <div className="flex items-center gap-[5px]">
            <h2 className="text-[0.9vw] font-mont text-slate-500 font-[550] select-none">
              {tk.Tag}
            </h2>
            <LuTag color="gray" size="0.9vw" />
          </div>
        </div>
      </div>
      <div
        className={`footer absolute bottom-0  h-[20%] w-full left-0 ${
          tk.Color == "indigo" ? "bg-indigo-500 " : "bg-emerald-600 "
        }`}
      ></div>
    </motion.div>
  );
}

export default Taskcards;
