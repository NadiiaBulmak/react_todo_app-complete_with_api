import { Filter } from './filter.enum';
import { Todo } from './todo.type';

export type FooterProps = {
  filteredBy: Filter;
  setFilteredBy: React.Dispatch<React.SetStateAction<Filter>>;
  todosCounter: number;
  clearCompleted: () => void;
  completedTodos: Todo[];
};
