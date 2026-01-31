export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type TodoItemProps = {
  todo: Todo;
  loading?: boolean;
  deleteTodo: (todoId: number) => void;
  updateTodo: (todoToUpdate: Todo) => void;
  editingTodosIds: number[];
  setEditingTodosIds: React.Dispatch<React.SetStateAction<number[]>>;
};

export type TodoListProps = {
  tempTodo: Todo | null;
  loadingTodoIds: number[];
  deleteTodo: (todoId: number) => void;
  updateTodo: (todoToUpdate: Todo) => void;
  editingTodosIds: number[];
  setEditingTodosIds: React.Dispatch<React.SetStateAction<number[]>>;
  filteredTodos: Todo[];
};
