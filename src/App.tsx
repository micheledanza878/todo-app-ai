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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Todo List</h1>

      <div style={{ marginBottom: '20px', display: 'flex' }}>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyDown={handleKeyDown} // Using onKeyDown for Enter key
          placeholder="Add a new task"
          style={{ flexGrow: 1, padding: '10px', marginRight: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px' }}
        />
        <button onClick={handleAddTask} style={{ padding: '10px 20px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', fontSize: '16px', transition: 'background-color 0.2s' }}>
          Add Task
        </button>
      </div>

      <div>
        <h2 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '15px', color: '#555' }}>Tasks</h2>
        {tasks.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>No tasks yet. Add one above!</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tasks.map((task) => (
              <li key={task.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '12px', border: '1px solid #f0f0f0', borderRadius: '4px', background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none', flexGrow: 1, fontSize: '16px', color: '#333' }}>
                  {task.text}
                </span>
                {/* Placeholder for future actions like toggle complete or delete */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
