import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./TodoContext";

function App() {
  // State
  const [todos, setTodos] = useState([]);
  // Add Todo
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(), ...todo}])
  };
  // Update Todo
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
  // Delete Todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  // Toggle Todo
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }
  // UseEffect
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("id"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])
  // Delete From LocalStorage
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(todos))
  }, [todos])
  
  return (
    <TodoProvider value={{addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
