import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTodoStore } from './store/todoStore';
import { TodoItem } from './components/TodoItem';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const { todos, addTodo, toggleTodo, updateTodo, deleteTodo } = useTodoStore();

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 animate-gradient-slow relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.05),transparent)]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute right-1/4 top-1/4 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute left-1/4 bottom-1/4 w-[400px] h-[400px] bg-cyan-200/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>
      
      <div className="max-w-2xl mx-auto py-12 px-4 relative">
        <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8 mb-8 transition-all duration-300 hover:shadow-xl hover:bg-white/90">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center animate-fade-in">
            Todo List
          </h1>
          
          <form onSubmit={handleAddTodo} className="flex gap-3 mb-8 animate-slide-up">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/80"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Plus size={20} className="animate-bounce-slight" />
              Add Task
            </button>
          </form>

          <div className="space-y-3">
            
              <div className="animate-fade-in space-y-3">
                {todos.map((todo, index) => (
                  <div
                    key={todo.id}
                    className="animate-slide-up"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <TodoItem
                      todo={todo}
                      onToggle={toggleTodo}
                      onUpdate={updateTodo}
                      onDelete={deleteTodo}
                    />
                  </div>
                ))}
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;