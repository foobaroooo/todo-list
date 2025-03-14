import React, { useState } from 'react';
import AddToDo from './AddToDo';
import ToDoListColumn from './ToDoListColumn';
import { DndContext } from '@dnd-kit/core';
import ToDoType from '../ToDoType.interface';

interface ToDoListProps {
    todos: ToDoType[];
}

const ToDoList = ({ todos: initialTodos } : ToDoListProps) => {
    const [newTask, setNewTask] = useState<ToDoType | null>(null);
    const [todos, setTodos] = useState(initialTodos);

    const handleAddTask = (task:ToDoType) => {
        // todos.push(task);
        const newTodos = [...todos, task];

        setTodos(newTodos);
        setNewTask(task);
    }

    const handleDragEnd = ({ active, over }: { active: any, over: any }) => {
        const draggedTodoId = active.id;
        const droppedColumnTitle = over.id;

        // if no collison, change todo status and update state
        if (over) {
            setTodos(
                todos.map((todo) => {
                    if (todo.id == draggedTodoId) {
                        // todo.status = droppedColumnTitle
                        return {
                            ...todo,
                            status: droppedColumnTitle
                        };
                    } else {
                        return todo
                    }
                })
            )
                
        }
      
    }

    return (
        <div className='container mx-auto flex justify-center items-center'>
            <div>
                <AddToDo onAddTask={handleAddTask} />
                <DndContext onDragEnd={handleDragEnd}>
                    <div  className='flex'>
                        <section className='flex-col m-5 p-5 '>
                            <ToDoListColumn todos={todos.filter((t) => t.status === 'to-do')} status='to-do' />
                        </section>
                        <section className='flex-col m-5 p-5'>
                            <ToDoListColumn todos={todos.filter((t) => t.status === 'in-progress')} status='in-progress' />
                        </section>
                        <section className='flex-col m-5 p-5'>
                            <ToDoListColumn todos={todos.filter((t) => t.status === 'done')} status='done' />
                        </section>
                    </div>
                    <div>
                        
                    </div>
                </DndContext>
            </div>
        </div>
    )
};
export default ToDoList;