import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTodos from "../Services/Actions/todosActions";

const Todos = () => {
  const { isLoading, error, todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      <h1>Todo Application</h1>
      {isLoading && <h3>Data is Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {todos &&
          todos.map((todo) => {
            return (
              <div>
                <h3>{todo.id}</h3>
                <h2>{todo.title}</h2>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
