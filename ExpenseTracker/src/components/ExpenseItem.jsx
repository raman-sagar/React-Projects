import React from "react";
import { MdOutlineCancel } from "react-icons/md";

export const ExpenseItem = ({ content, onDelete }) => {
  return (
    <>
      <div className="p-2 grid grid-cols-4 justify-between items-center gap-2 border-2 border-emerald-600 rounded-md bg-cyan-700 font-semibold">
        <p className="col-span-2">{content.title}</p>
        <p className="justify-self-center">₨.{content.amount}</p>
        <MdOutlineCancel
          className="size-5 text-red-700 cursor-pointer duration-100 hover:scale-125 active:scale-95 justify-self-end"
          onClick={() => onDelete(content.id)}
        />
      </div>
    </>
  );
};
