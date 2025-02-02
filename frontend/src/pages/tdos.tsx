import { useState, useEffect } from "react";
import { Check, Pencil, Trash, Plus } from "lucide-react";
import axios from "axios";
import React from "react";

type Todo = {
  _id: string;
  title: string;
  userId: string;
  completed: boolean;
  createdAt: string;
  __v: number;
};

export function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State for modal
  const [newTodoTitle, setNewTodoTitle] = useState(""); // State for new todo title
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null)

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://todo-fullstack-sape.onrender.com/api/v1/todos", {
        headers: {
          Authorization: `${token}`,
        },
      });
      setTodos(res.data); // API returns array of todos
    } catch (err) {
      console.error("Error fetching todos:", err);
      setError(err.response?.data?.message || "Failed to fetch todos");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTodo = async (_id: string) => {
    try {
        const token = await localStorage.getItem('token');
        const todo = (todos.find(t => t._id === _id) ) ;
        await axios.put(`https://todo-fullstack-sape.onrender.com/api/v1/todos/${_id}`, 
            { completed: !todo.completed },  // Send the new completed status
            {
                headers: {
                    Authorization: `${token}`
                }
            }
        );
      fetchTodos(); // Refetch after update
    } catch (err) {
      setError("Failed to update todo");
    }
  };

  const deleteTodo = async (_id: string) => {
    try {
    const token = await localStorage.getItem('token');
      await axios.delete(`https://todo-fullstack-sape.onrender.com/api/v1/todos/${_id}`,{
        headers: {
            Authorization: `${token}`
        }
      });
      fetchTodos(); // Refetch after deletion
    } catch (err) {
      setError("Failed to delete todo");
    }
  };

  const addTodo = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://todo-fullstack-sape.onrender.com/api/v1/todos",
        {
          title: newTodoTitle,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setTodos([...todos, res.data]); // Add new todo to the list
      setIsAddModalOpen(false); // Close the modal
      setNewTodoTitle(""); // Clear the input
    } catch (err) {
      setError("Failed to add todo");
    }
  };

  const handleEditClick = (todo: Todo) => {
    setEditingTodo(todo);  // Store the selected todo
    setNewTodoTitle(todo.title);  // Prefill input with existing title
    setIsAddModalOpen(true);  // Open modal
  };

  const editTodo = async (_id: string) => {
    try {
      const token = localStorage.getItem("token");
  
      const res = await axios.put(
        `https://todo-fullstack-sape.onrender.com/api/v1/todos/${_id}`,
        {
          title: newTodoTitle, // Send updated title
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
  
      // Update the local state with new data
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo._id === _id ? res.data : todo))
      );
  
      // Close modal & reset state
      setIsAddModalOpen(false);
      setNewTodoTitle("");
      setEditingTodo(null);
    } catch (err) {
      setError("Failed to update todo");
    }
  };

  return (
    <main className="container px-4 py-8 mx-auto">
      <div className="flex justify-between items-center mb-8">
        {error && <p className="text-red-500">{error}</p>}
        <h1 className="text-2xl font-bold">My Tasks</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      </div>

      {isLoading ? (
        <p>Loading todos...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {todos.map((todo) => (
            <div
              key={todo._id}
              className={`p-4 rounded-lg border ${
                todo.completed ? "bg-gray-900/50 border-gray-800" : "bg-gray-900 border-gray-800"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3
                    className={`font-medium ${
                      todo.completed ? "text-gray-500 line-through" : "text-white"
                    }`}
                  >
                    {todo.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Created: {new Date(todo.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => toggleTodo(todo._id)}
                    className={`p-1 rounded-md hover:bg-gray-800 ${
                      todo.completed ? "text-purple-400" : "text-gray-400"
                    }`}
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button onClick={()=> handleEditClick(todo)} className="p-1 text-gray-400 hover:text-white rounded-md hover:bg-gray-800">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="p-1 text-gray-400 hover:text-red-400 rounded-md hover:bg-gray-800"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

     {/* Add/Edit Todo Modal */}
     {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {editingTodo ? "Edit Task" : "Add New Task"}
            </h2>
            <input
              type="text"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
              placeholder="Enter task title"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => {
                  setIsAddModalOpen(false);
                  setNewTodoTitle("");
                  setEditingTodo(null);
                }}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={editingTodo ? () => editTodo(editingTodo._id) : addTodo}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg"
              >
                {editingTodo ? "Save Changes" : "Add Task"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}