import React, { useState } from 'react';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>('');

  const handleAddTask = () => {
    if (newTaskText.trim() === '') {
      return; // Don't add empty tasks
    }
    const newId = Date.now().toString(); // Simple unique ID generation
    const newTask: Task = {
      id: newId,
      text: newTaskText.trim(),
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskText(''); // Clear input field
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Todo List</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task"
          style={{ padding: '8px', marginRight: '10px', width: '70%' }}
        />
        <button onClick={handleAddTask} style={{ padding: '8px 15px', cursor: 'pointer' }}>
          Add Task
        </button>
      </div>

      <div>
        <h2>Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tasks.map((task) => (
              <li key={task.id} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.text}
                </span>
                {/* Placeholder for mark complete/delete buttons */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
