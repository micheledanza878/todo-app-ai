import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoFilter } from './TodoFilter';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleComplete = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Active') {
      return !todo.completed;
    } else if (filter === 'Completed') {
      return todo.completed;
    } else {
      return true; // 'All'
    }
  });

  const remainingTasks = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
      <div className="todo-count">
        {remainingTasks} tasks remaining
      </div>
    </div>
  );
};
