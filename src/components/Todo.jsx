import React, { useEffect, useState } from "react";
import "../assets/css/Todo.css";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import { v4 } from "uuid";

const TODO_STORAGE_KEY = "todo_torage"

const Todo = () => {
  const [listTodo, setListTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(()=>{
    const getValue = localStorage.getItem(TODO_STORAGE_KEY);
    if(getValue) {
      setListTodo(JSON.parse(getValue)); 
    }
  }, [])

  useEffect(()=>{
    if(listTodo.length !== 0) {
      localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(listTodo));
    }
  }, [listTodo])

  const addTodo = () => {
    if (newTodo.length > 0) {
      const newItem = [
        ...listTodo,
        {
          id: v4(),
          name: `${newTodo}`,
          checked: false,
        },
      ];
      setListTodo(newItem);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    const newList = listTodo.filter((todo) => todo.id !== id);
    setListTodo(newList);
    if(newList.length <= 1){
      localStorage.removeItem(TODO_STORAGE_KEY);
    }
  };

  return (
    <div className="mainStyle">
      <h1 className="titleStyle">Todo list</h1>
      <div className="boxStyle">
        <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
        <div className="listTodoStyle">
          {listTodo.map((todo) => {
            return (
              <ListTodo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                setListTodo={setListTodo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;