import React from 'react';
import { TodoItem } from './TodoItem';
import { Todo } from './TodoApp'; // Import Todo type from TodoApp

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No tasks to display.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
};
