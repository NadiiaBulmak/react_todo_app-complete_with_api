import React from 'react';
import { FilterList } from '../FilterList';
import { FooterProps } from '../../types';


export const Footer: React.FC<FooterProps> = ({
  filteredBy,
  setFilteredBy,
  todosCounter,
  clearCompleted,
  completedTodos,
}) => (
  <footer className="todoapp__footer" data-cy="Footer">
    <span className="todo-count" data-cy="TodosCounter">
      {todosCounter} items left
    </span>

    <FilterList filteredBy={filteredBy} setFilteredBy={setFilteredBy} />

    <button
      type="button"
      className="todoapp__clear-completed"
      data-cy="ClearCompletedButton"
      onClick={clearCompleted}
      disabled={completedTodos.length === 0}
    >
      Clear completed
    </button>
  </footer>
);
