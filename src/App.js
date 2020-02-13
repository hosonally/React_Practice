import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todoList, setTodoList] = useState(["リンゴ", "バナナ", "いちご"]);
  const [todoName, setTodoName] = useState("");

  function doAddTodo() {
    todoList.push(todoName);
    return todoList;
  }

  const addTodo = function() {
    todoList.push(todoName);
    setTodoName("");
  };

  const inputtedName = function(e) {
    setTodoName(e.target.value);
  };

  const editTodo = function() {};

  return (
    <div>
      <input type="text" onInput={inputtedName} value={todoName} />
      ：TODO <button onClick={addTodo}>追加</button>
      {todoList.map(function(todo) {
        return (
          <div>{todo}食べるぜ</div>,
          <button onClick="">編集</button>,
          <button onClick="">削除</button>
        );
      })}
    </div>
  );
}
