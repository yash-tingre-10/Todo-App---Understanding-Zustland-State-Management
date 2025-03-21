import React, { useState } from 'react';
import { Check, Pencil, Trash2, X } from 'lucide-react';
import { Todo } from '../store/todoStore';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onUpdate, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim()) {
      onUpdate(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className="group flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white/90 hover:scale-[1.02] hover:-translate-y-0.5">
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-300 ${
          todo.completed
            ? 'bg-emerald-500 border-emerald-500 scale-110'
            : 'border-gray-300 hover:border-emerald-500 hover:scale-110'
        } flex items-center justify-center`}
      >
        {todo.completed && (
          <Check size={14} className="text-white animate-scale-check" />
        )}
      </button>

      {isEditing ? (
        <div className="flex-1 flex gap-2 animate-fade-in">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 px-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/50 backdrop-blur-sm transition-all duration-200"
            autoFocus
          />
          <button
            onClick={handleUpdate}
            className="p-1.5 text-emerald-600 hover:text-emerald-700 transition-colors duration-200 hover:scale-110"
          >
            <Check size={18} />
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
              setEditText(todo.text);
            }}
            className="p-1.5 text-gray-600 hover:text-gray-700 transition-colors duration-200 hover:scale-110"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <>
          <span
            className={`flex-1 transition-all duration-300 ${
              todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'
            }`}
          >
            {todo.text}
          </span>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1.5 text-gray-600 hover:text-gray-700 transition-all duration-200 hover:scale-110"
            >
              <Pencil size={18} />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="p-1.5 text-red-600 hover:text-red-700 transition-all duration-200 hover:scale-110"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}