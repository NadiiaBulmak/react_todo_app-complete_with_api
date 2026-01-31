import { Todo } from './todo.type';

export type HeaderFormProps = {
  newTodoTitle: string;
  setTodoTitle: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (newTodo: Todo) => void;
  loading: boolean;
  isAllTasksCompleted: boolean;
  toggleAll: () => void;
  toggleAllButtonVisible: boolean;
};
