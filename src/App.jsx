import ToDoList from "./components/ToDoList";
import './index.css'

function App() {
  return (
    <main className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-4"> 
        To-Do List
      </h1>

      <ToDoList
        todos={[
          { id: 1, text: "buy milk", status: "to-do" },
          { id: 2, text: "wash bike", status: "in-progress" },
          { id: 3, text: "do the budget", status: "done" },
          { id: 4, text: "call jane", status: "to-do" },
        ]}
        />
      </main>
  );
}

export default App;