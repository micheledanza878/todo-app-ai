import React, { useState, useEffect } from 'react';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { TodoFilter } from './TodoFilter';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';

const getInitialTodos = (): Todo[] => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
};

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);
  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Placeholder functions for now, will be implemented fully later
  const addTodo = (text: string) => {
    console.log('Add todo:', text);
  };

  const toggleTodo = (id: string) => {
    console.log('Toggle todo:', id);
  };

  const deleteTodo = (id: string) => {
    console.log('Delete todo:', id);
  };

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
  };

  const remainingTasks = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-app-container">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoFilter currentFilter={filter} onFilterChange={handleFilterChange} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <p>Remaining tasks: {remainingTasks}</p>
    </div>
  );
};
