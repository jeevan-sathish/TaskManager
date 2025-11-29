import React from "react";
import { TbPointFilled } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

import EmptyList from "./EmptyList.jsx";
import PopUp from "./PopUp.jsx";
import { useState } from "react";
import { useEffect } from "react";

const TodoLists = ({ todoList, deleteTask,pop }) => {
  

   
 

  return (
    <div className="w-full h-[560px] flex flex-col items-center p-5 gap-8 bg-white overflow-y-auto realtive">
      {pop&&<PopUp  todoList={todoList} />}
      {/* If no tasks → show EmptyList */}
      {todoList.length === 0 ? (
        <EmptyList />
      ) : (
        todoList.map((item) => (
          <div
            key={item.id}
            className="w-[90%] min-h-[80px] p-5 bg-amber-300 flex justify-between items-center rounded-xl shadow-md"
          >
            <TbPointFilled className="text-pink-900 text-2xl mr-3" />

            {/* Task text */}
            <div className="flex-1 text-gray-800 text-lg font-medium break-words overflow-hidden">
              {item.task}
            </div>

            {/* Delete button */}
            <button
              onClick={() => deleteTask(item.id)}
              className="ml-4 flex justify-center items-center bg-transparent flex-shrink-0 p-[15px] h-[40px] rounded-lg"
            >
              <MdDelete className="text-[30px] text-black hover:text-red-500" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoLists;
