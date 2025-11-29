import React from 'react'
import { PiNotepadFill } from "react-icons/pi";

const EmptyList = () => {
  
  return (
    <div className="w-full h-[560px] flex flex-col items-center justify-center p-5 gap-8 bg-white  ">
    <div className='flex flex-col items-center justify-center'>
        <PiNotepadFill className='text-[40px]'/>
        <p>We Remember your notes and safely secured</p>
    </div>
        
    </div>
  )
}

export default EmptyList