import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../store/todoSlice";
import styles from "./AddingTasks.module.scss";

function AddingTasks() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    if (text) {
      dispatch(addTodo(text));
    }
    setText("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  return (
    <label className={styles.add_task}>
      <input
        className={styles.entry_field}
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={29}
        onKeyPress={handleKeyPress}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>add todo</button>
    </label>
  );
}
export { AddingTasks };
