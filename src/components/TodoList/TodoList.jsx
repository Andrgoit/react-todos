import { TodoItem } from "@/components";
import styles from "@/components/TodoList/TodoList.module.css";

export default function TodoList({
  todos = [],
  UpdateTodo,
  DeleteTodo,
  CompleteTodo,
}) {
  const elements = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      UpdateTodo={UpdateTodo}
      DeleteTodo={DeleteTodo}
      CompleteTodo={CompleteTodo}
    />
  ));

  return (
    <div className={styles.list}>
      {todos.length > 0 ? (
        elements
      ) : (
        <p className="flex flex-1 items-center justify-center text-gray-400">
          No tasks yet
        </p>
      )}
    </div>
  );
}
