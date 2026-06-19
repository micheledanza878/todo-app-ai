import React, { useState, useEffect } from 'react';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const LOCAL_STORAGE_KEY = 'react-todo-app-tasks';

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    if (text.trim() === '') return;
    const newTask: Task = {
      id: Date.now().toString(), // Simple unique ID
      text,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      {/* Placeholder for TodoForm */}
      <p>Add Task Input Here</p>
      {/* Placeholder for TodoList */}
      <p>List of Tasks Here</p>
      {/* Placeholder for TodoFilter and remaining tasks count */}
      <p>Filter and Count Here</p>

      <h2>Current Tasks:</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text} (Completed: {task.completed ? 'Yes' : 'No'})
            <button onClick={() => toggleTask(task.id)}>Toggle</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTask('New Task ' + (tasks.length + 1))}>Add Placeholder Task</button>
    </div>
  );
};

export default TodoApp;
