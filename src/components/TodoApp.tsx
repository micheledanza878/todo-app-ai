import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoFilter } from './TodoFilter';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Filter = 'all' | 'active' | 'completed';

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: string) => {
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
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const remainingTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <TodoFilter currentFilter={filter} setFilter={setFilter} />
      <div className="todo-counter">
        {remainingTasks} {remainingTasks === 1 ? 'task' : 'tasks'} remaining
      </div>
    </div>
  );
}
