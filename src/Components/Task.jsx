const Task = ({ titre, id, handleRemove }) => {
    return ( 
        <div className="task py-3 px-7 rounded-md my-4 flex">
            <h1>{ titre }</h1>
            <button onClick={() => handleRemove(id)} className='ml-auto text-red-400 pl-2'>x</button>
        </div>
     );
}
 
export default Task;