import React from 'react'

const TodoLists = ({todoList,deleteTask}) => {
  return (
    <div className='w-full h-[560px] flex flex-col justify-center items-center bg-white overflow-y-scroll'>
        <ul>
  {todoList.map((item) => (
    <li key={item.id}>
      {item.task}

      <button onClick={() => deleteTask(item.id)}>
        delete
      </button>
    </li>
  ))}
</ul>
    </div>
  )
}

export default TodoLists