import React, { useState, useEffect } from 'react';
import TodoLists from './TodoLists';
import useTaskStore from '../zustand/store.js'
import { IoMdAddCircleOutline } from "react-icons/io";


const TodoHandler = () => {
    const [pop,setPop]=useState(false);
    const {  setTaskCount } = useTaskStore();
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
// const todolength = todoList.length+1;
  function handleTask(e) {
    setTask(e.target.value);
  }

 setTimeout(()=>{
  setPop(false)
 },5000)

  // 👉 Add task
  async function handleAddTask(e) {
    e.preventDefault();
    if(task.length>0){
        setPop(true);
    }
    

    if (!task.trim()) return;

    try {
      const response = await fetch("http://localhost:3000/task", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ task }) 
      });

      const data = await response.json();
      console.log("Task added:", data);

      setTask("");
      fetchTasks();   // refresh list
    } catch (err) {
      console.log("Error:", err);
    }
  }

 

  // 👉 Fetch tasks from backend
  async function fetchTasks() {
    try {
      const response = await fetch("http://localhost:3000/task");
      const data = await response.json();
      setTodoList(data);
      setTaskCount(data.length)
    } catch (err) {
      console.log("Error fetching tasks:", err);
    }
  }
  async function deleteTask(id) {

    setPop(true)
  try {
    await fetch(`http://localhost:3000/task/${id}`, {
      method: "DELETE"
    });

    fetchTasks(); // Refresh task list
  } catch (err) {
    console.log("Error deleting task:", err);
  }
}

function handleKeyPress(e){
  if(e.key==="Enter"){
    handleAddTask();
  }
}

  // 👉 Load tasks on page load
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className='w-full h-auto '>
      <form onSubmit={handleAddTask} className='w-full flex flex-row justify-center item-center h-[50px] bg-transparent'>
      <div className='w-full h-full  flex flex-row justify-center items-center gap-[10px]'>
          <input 
            className={`w-[73%] h-[40px] pl-[30px] rounded-[10px] border-1 border-black focus:${task.length>0?" border-2 border-green-500 outline-none":"border-red-500 outline-none"} `}
          type="text" 
          placeholder="Enter your note" 
          value={task}
          onChange={handleTask} 
          onKeyDown={handleKeyPress}
          
        />
        <button 
        type="submit"
        className={`flex flex-row gap-[10px] justify-center items-center w-[100px] h-[40px] rounded-[10px] 
        ${task.length>0?"bg-green-500 font-medium":"bg-red-500 text-white font-medium"}
         `}
        
        >Add <IoMdAddCircleOutline /></button>
      </div>
      </form>

      
      <TodoLists todoList={todoList} deleteTask={deleteTask} pop={pop}/>

    </div>
  );
};

export default TodoHandler;
