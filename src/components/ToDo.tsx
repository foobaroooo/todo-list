import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import ToDoType from '../ToDoType.interface';

function ToDo({ todo }: ToDoType) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: todo.id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div className="border-2 border-blue-200 p-3 m-3 rounded bg-green-500"  
      ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {todo.text}
    </div>
  );
}

export default ToDo;