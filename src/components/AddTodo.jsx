import React from 'react';
import '../assets/css/AddTodo.css'

const AddTodo = (props) => {

  const newTodo = props.newTodo;
  const setNewTodo = props.setNewTodo;
  const addTodo = props.addTodo;

  return (
    <div className="formStyle">
      <input
        className="inputStyle"
        type="text"
        value={newTodo}
        onChange={(e) => {
          const todo = e.target.value;
          setNewTodo(todo);
        }}
      />
      <button className="buttonStyle" onClick={addTodo}>
        ADD
      </button>
    </div>
  );
}

export default AddTodo