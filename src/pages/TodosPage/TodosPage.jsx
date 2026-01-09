import { useEffect, useState } from "react";
import { AddTodoBtn, TodoList } from "@/components";

import { ToastContainer, Bounce, toast } from "react-toastify";

import getTodos from "@/api/getTodos";
import addTodo from "@/api/addTodo";
import deleteTodo from "@/api/deleteTodo";
import updateTodo from "@/api/updateTodo";
import completeTodo from "@/api/completeTodo";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchingTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (error) {
        toast.error(`${error.message}`);
        console.error("Error fetching todos:", error);
      }
    };
    fetchingTodos();
  }, []);

  const AddTodo = async (todo) => {
    try {
      const response = await addTodo(todo);
      setTodos((prev) => [...prev, response]);
      toast.success("The task added!");
    } catch (error) {
      toast.error(`${error.message}`);
      console.error("Error adding todo:", error);
    }
  };

  const UpdateTodo = async (id, newTodo) => {
    try {
      const response = await updateTodo(id, newTodo);
      setTodos((prev) =>
        prev.map((todo) => (todo.id === response.id ? response : todo)),
      );
      toast.info("The task updated!");
    } catch (error) {
      toast.error(`${error.message}`);
      console.error("Error changing todo:", error);
    }
  };

  const DeleteTodo = async (id) => {
    try {
      const response = await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== response.id));
      toast.info("The task deleted!");
    } catch (error) {
      toast.error(`${error.message}`);
      console.error("Error deleting todo:", error);
    }
  };

  const CompleteTodo = async (id) => {
    try {
      const response = await completeTodo(id, { completed: true });
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? response : todo)),
      );
      toast.success("Congratulation! The task is completed!");
    } catch (error) {
      toast.error(`${error.message}`);
      console.error("Error completing todo:", error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />

      <main>
        <div className="container flex flex-1 flex-col items-center">
          <div className="mb-3 mt-3 flex justify-center">
            <AddTodoBtn AddTodo={AddTodo} />
          </div>
          <TodoList
            todos={todos}
            UpdateTodo={UpdateTodo}
            DeleteTodo={DeleteTodo}
            CompleteTodo={CompleteTodo}
          />
        </div>
      </main>
    </>
  );
}
