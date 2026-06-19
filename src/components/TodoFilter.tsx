import React from 'react';

interface TodoFilterProps {
  currentFilter: 'All' | 'Active' | 'Completed';
  onFilterChange: (filter: 'All' | 'Active' | 'Completed') => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({ currentFilter, onFilterChange }) => {
  const filters: Array<'All' | 'Active' | 'Completed'> = ['All', 'Active', 'Completed'];

  return (
    <div className="todo-filter">
      {filters.map((filter) => (
        <button
          key={filter}
          className={currentFilter === filter ? 'active' : ''}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
