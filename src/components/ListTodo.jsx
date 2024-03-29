import React, { useEffect, useState } from "react";
import "../assets/css/ListTodo.css";

const ListTodo = (props) => {
  const [check, setCheck] = useState(false);

  const todo = props.todo;
  const deleteTodo = props.deleteTodo;
  const setListTodo = props.setListTodo;
  const listTodo = props.listTodo;

  return (
    <div className="todo">
      <input
        type="checkbox"
        onClick={(e) => {
          setCheck(!check);
        }}
        onChange={(e)=>{
          if (e.target.checked !== check) {
            console.log("listTodo", listTodo);
            const addCheck = e.target.checked;
            setListTodo(
              listTodo.map((e) => {
                return { ...e, checked: addCheck };
              })
            );
          } else {
            const addCheck = e.target.checked;
            setListTodo(
              listTodo.map((e) => {
                return { ...e, checked: !addCheck };
              })
            );
          }
        }}
        className="checkBoxStyle"
      />{" "}
      <p
        style={{
          textDecoration: check ? "line-through" : "none",
        }}
        className="contentStyle"
      >
        {todo.name}
      </p>
      <a
        className="deleteStyle"
        onClick={() => {
          if (check) {
            deleteTodo(todo.id);
          }
        }}
        style={{
          cursor: check ? "pointer" : "not-allowed",
          background: !check && "rgba(43, 58, 85, .5)",
        }}
      >
        {check && `Delete`}
      </a>
    </div>
  );
};

export default ListTodo;
