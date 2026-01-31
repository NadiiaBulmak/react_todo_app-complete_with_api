import React from 'react';
import { TodoListProps } from '../../types';
import { TodoItem } from '../TodoItem';

export const TodoList: React.FC<TodoListProps> = ({
  filteredTodos,
  tempTodo,
  loadingTodoIds,
  deleteTodo,
  updateTodo,
  editingTodosIds,
  setEditingTodosIds,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          loading={loadingTodoIds.includes(todo.id)}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          editingTodosIds={editingTodosIds}
          setEditingTodosIds={setEditingTodosIds}
        />
      ))}
      {tempTodo && (
        <TodoItem
          key={'temp'}
          todo={tempTodo}
          loading={true}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          editingTodosIds={editingTodosIds}
          setEditingTodosIds={setEditingTodosIds}
        />
      )}
    </section>
  );
};
