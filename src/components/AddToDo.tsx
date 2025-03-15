import React, { useState } from 'react';
import ToDoType from '../ToDoType.interface';

interface AddToDoProp {
    onAddTask: (data: ToDoType) => void;
}

function AddToDo(props : AddToDoProp) {
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (newTodo) {
            props.onAddTask({
                id: Math.floor(Math.random() * 10000), 
                text: newTodo, 
                status: 'to-do'
            });
            
            setNewTodo('');

        }
    }
    
    return (
        <div className='mb-10'>
            <form>
                <input type="text" id="task" name="task" value={newTodo} onChange={handleChange} />
                <button onClick={handleClick} className='ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Task</button>
            </form>
        </div>
    );
};

export default AddToDo;