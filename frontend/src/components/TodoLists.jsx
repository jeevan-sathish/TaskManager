import React from 'react'

const TodoLists = ({todoList,deleteTask}) => {
  return (
    <div>
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