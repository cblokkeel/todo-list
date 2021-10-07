import { useState } from 'react'
import TasksList from './Components/TasksList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex flex-col justify-center items-center">
      <h1 className='text-4xl mt-10 font-bold'>Todo List</h1>
      <TasksList />
    </div>
  )
}

export default App
