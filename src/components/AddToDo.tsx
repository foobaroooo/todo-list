import React, { useRef } from 'react';
import ToDoType from '../ToDoType.interface';

interface AddToDoProp {
    onAddTask: (data: ToDoType) => void;
}

function AddToDo(props : AddToDoProp) {
    const task = useRef<HTMLInputElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (task.current) {
            props.onAddTask({
                id: Math.floor(Math.random() * 10000), 
                text: task.current.value, 
                status: 'to-do'
            });
        }
    }
    
    return (
        <div className='mb-10'>
            <form>
                <input ref={task} type="text" id="task" name="task" />
                <button onClick={handleClick} className='ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Task</button>
            </form>
        </div>
    );
};

export default AddToDo;