// app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Todo } from '@/types/todo';
import TodoItem from './components/TodoItem';
import { v4 as uuidv4 } from 'uuid';

type Filter = 'all' | 'active' | 'completed';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newTodo: Todo = {
      id: uuidv4(),
      text: trimmed,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInput('');
  };

  const handleToggleComplete = (id: string) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter(t => t.id !== id));
    setExpanded(prev => {
      const updated = new Set(prev);
      updated.delete(id);
      return updated;
    });
  };

  const handleToggleExpand = (id: string) => {
    setExpanded(prev => {
      const updated = new Set(prev);
      if (updated.has(id)) updated.delete(id);
      else updated.add(id);
      return updated;
    });
  };

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>📝 Todo List</h1>
      <div className="input-group">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a todo"
          type="text"
        />
        <button onClick={handleAdd}>Add</button>
      </div>


      <div style={{ margin: '1rem 0' }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      <div>
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isExpanded={expanded.has(todo.id)}
            onToggleExpand={handleToggleExpand}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </main>
  );
}
