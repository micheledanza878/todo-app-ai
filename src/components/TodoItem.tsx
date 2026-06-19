import React from 'react';
import { Todo } from './TodoApp';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
