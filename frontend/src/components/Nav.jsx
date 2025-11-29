import React from 'react'
import { FcParallelTasks } from "react-icons/fc";
import useTaskStore from '../zustand/store';
import { FaClipboardList } from "react-icons/fa";

const Nav = () => {
      const { taskCount } = useTaskStore();
  return (
    <div className='w-full h-[120px] bg-blue-900 flex flex-row justify-evenly items-center'>
    <div className='flex flex-row justify-center items-center gap-[5px]'>
        <p className='text-[18px] font-medium text-white'>KeepNote</p>
<FcParallelTasks className='text-[30px]'/>
    </div>
    <div className='flex flex-row justify-center items-center gap-[5px]'>
     <FaClipboardList className='text-[30px] text-white' />
        <p className='text-white font-medium'>{taskCount} </p>
        <p className='text-[10px] text-cyan-300'>added</p>
   

    </div>
    </div>
  )
}

export default Nav