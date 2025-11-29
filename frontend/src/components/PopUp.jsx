import React from 'react'
import { IoIosNotifications } from "react-icons/io";

const PopUp = ({todoList}) => {
   
  return (
    <div className='w-[250px] absolute top-[80%] bg-yellow-700 h-[60px] rounded-[10px] flex flex-row justify-center items-center animate-bounce '>
       <div className='flex flex-row justify-center items-center gap-[10px]'>
         <IoIosNotifications className='text-[25px] ml-[10px]' />
         <p className='p-[10px] text-[12px] text-center text-white'>something changes was done on this app</p>
       </div>

    </div>
  )
}

export default PopUp