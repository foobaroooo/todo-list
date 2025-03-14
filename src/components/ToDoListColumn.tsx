import Task from './ToDo';
import {useDroppable} from '@dnd-kit/core';
import ToDoType from '../ToDoType.interface';

interface ToDoListColumnProps {
  todos: ToDoType[],
  status: string
}

function ToDoListColumn({ todos, status }: ToDoListColumnProps) {
  // console.log(todos);
  const {isOver, setNodeRef} = useDroppable({
    id: status,
  });

  return (
    <div  
      ref={setNodeRef}
      style={{
        border: "1px solid gray",
        padding: "20px",
        margin: "10px",
        minWidth: "200px",
        minHeight:"500px",
        backgroundColor: isOver ? "lavender" : "transparent",
      }}
    >
      <h3 className="capitalize font-bold text-xl">{status}</h3>
      {
        todos.map((todo) => {
          return <Task key={todo.id} todo={todo} />    
        })
      }
    </div>
  );

  
}

export default ToDoListColumn;