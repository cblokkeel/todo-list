import Task from "./Task";
import { useState } from "react";

const TasksList = () => {
    const [tasks, setTasks] = useState([]);
    const [lastId, setLastId] = useState(0);

    const handleRemove = id => {
        const newTasks = tasks.filter(task => task.id != id)
        setTasks(newTasks)
    }

    const handleAdd = title => {
        if (title.trim().length !== 0) {
            let newTasks = [...tasks]
            newTasks.push({
                tache: title,
                id: lastId + 1
            })
            setLastId(lastId + 1)
            setTasks(newTasks)
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleAdd(event.target.elements.tache.value)
        event.target.elements.tache.value = ""
    }

    const handleClear = () => {
        setTasks([])
    }

    return (
        <div className="tasks-list mt-20 flex flex-col">
            <form onSubmit={handleSubmit} className='max-w-md mb-4 flex flex-col'>
                <div className='mb-2'>
                    <label className='mr-2' htmlFor="tache">Tâche à ajouter</label>
                    <input className='border-2 border-green-600 border-opacity-100 rounded-md' type="text" name='tache' id='tache' required/>
                </div>
                <input className='text-white bg-green-600 p-2 rounded-md cursor-pointer' type="submit" value='Ajouter' />
            </form>
            {
                tasks.map(task => {
                    return <Task id={task.id} titre={task.tache} handleRemove={handleRemove} key={task.id}/>
                })
            }
            <button onClick={handleClear} className='bg-red-400 px-1 py-5 rounded-lg text-white mb-40 mx-4'>Clear</button>
        </div>
     );
}
 
export default TasksList;