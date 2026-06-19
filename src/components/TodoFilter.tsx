import React from 'react';
import { FilterType } from './TodoApp';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="todo-filter">
      <button
        onClick={() => onFilterChange('all')}
        className={currentFilter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('active')}
        className={currentFilter === 'active' ? 'active' : ''}
      >
        Active
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        className={currentFilter === 'completed' ? 'active' : ''}
      >
        Completed
      </button>
    </div>
  );
};
