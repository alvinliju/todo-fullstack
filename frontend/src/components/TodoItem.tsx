import { Check, Pencil, Trash } from "lucide-react";
import React from "react";
import { useCallback } from "react";

type Todo = {
  _id: string;
  title: string;
  userId: string;
  completed: boolean;
  createdAt: string;
  __v: number;
};

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => Promise<void>;
  onEdit: (todo: Todo) => void;
  onDelete: (id: string) => Promise<void>;
};




export const TodoItem = React.memo (({ todo, onToggle, onEdit, onDelete }: TodoItemProps) => {

    const handleToggle = useCallback(() => {
        onToggle(todo._id);
      }, [todo._id, onToggle]);
    
      const handleEdit = useCallback(() => {
        onEdit(todo);
      }, [todo, onEdit]);
    
      const handleDelete = useCallback(() => {
        onDelete(todo._id);
      }, [todo._id, onDelete]);

      
  return (
    <div
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
            onClick={() => onToggle(todo._id)}
            className={`p-1 rounded-md hover:bg-gray-800 ${
              todo.completed ? "text-purple-400" : "text-gray-400"
            }`}
          >
            <Check className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onEdit(todo)} 
            className="p-1 text-gray-400 hover:text-white rounded-md hover:bg-gray-800"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(todo._id)}
            className="p-1 text-gray-400 hover:text-red-400 rounded-md hover:bg-gray-800"
          >
            <Trash className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
)