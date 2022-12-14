import React, { useState } from "react";
import "../assets/css/Todo.css";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import { v4 } from "uuid";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    {
      id: v4(),
      name: "Cong viec 1",
      checked: false,
    },
    {
      id: v4(),
      name: "Cong viec 2",
      checked: false,
    },
    {
      id: v4(),
      name: "Cong viec 3",
      checked: false,
    },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.length > 0) {
      const newItem = [
        ...todoList,
        {
          id: v4(),
          name: `${newTodo}`,
          checked: false,
        },
      ];
      setTodoList(newItem);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    const newTodo = todoList.filter(todo => todo.id !== id)
    setTodoList(newTodo);
  };

  return (
    <div className="mainStyle">
      <h1 className="titleStyle">Todo list</h1>
      <div className="boxStyle">
        <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
        <div className="listTodoStyle">
          {todoList.map((todo) => {
            return (
              <ListTodo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;