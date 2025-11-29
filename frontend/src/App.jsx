import React from 'react'
import TodoHandler from './components/TodoHandler'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='w-full h-screen bg-blue-200 flex flex-col items-center' >
    <Nav/>
      <TodoHandler/>
    </div>
  )
}

export default App