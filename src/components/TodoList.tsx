import React from 'react';
import { Todo } from './TodoApp';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
