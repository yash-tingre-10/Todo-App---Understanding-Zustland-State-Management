import { create } from 'zustand';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [
    { id: '1', text: 'Set up workspace 🛠️', completed: true },
    { id: '2', text: 'Submitted all required documents 📝', completed: true },
    { id: '3', text: 'Accepted all email invites 📧', completed: true },
    { id: '4', text: 'Built a To-Do App to understand Zustand state management ⚙️', completed: true },
    { id: '5', text: 'Reviewed key TypeScript concepts 🪥', completed: true },
    { id: '6', text: 'Setting up work laptop after receiving it 💻', completed: false },
  ],

  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: crypto.randomUUID(), text, completed: false }],
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),

  updateTodo: (id, text) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
