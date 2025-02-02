import { useState } from "react"
import { Check, Pencil, Trash } from "lucide-react"
import React from "react"

type Todo = {
  id: number
  title: string
  description: string
  completed: boolean
}

export function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Study React fundamentals and hooks",
      completed: false,
    },
    // Add more sample todos as needed
  ])

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <main className="container px-4 py-8 mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">My Tasks</h1>
        <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
          Add Task
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`p-4 rounded-lg border ${
              todo.completed ? "bg-gray-900/50 border-gray-800" : "bg-gray-900 border-gray-800"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className={`font-medium ${todo.completed ? "text-gray-500 line-through" : "text-white"}`}>
                  {todo.title}
                </h3>
                <p className={`mt-1 text-sm ${todo.completed ? "text-gray-600" : "text-gray-400"}`}>
                  {todo.description}
                </p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`p-1 rounded-md hover:bg-gray-800 ${todo.completed ? "text-purple-400" : "text-gray-400"}`}
                >
                  <Check className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    /* Handle edit */
                  }}
                  className="p-1 text-gray-400 hover:text-white rounded-md hover:bg-gray-800"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-1 text-gray-400 hover:text-red-400 rounded-md hover:bg-gray-800"
                >
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

