import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChange,
  handleDelete,
  handleSubmit,
  handleEdit,
  handleComplete,
} from "./slice";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

function Todo() {
  const states = useSelector((state) => {
    return state.todoSlice;
  });

  const dispatch = useDispatch();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(handleSubmit());
        }}
      >
        <input
          type="text"
          placeholder="Enter your task"
          value={states.inputValue}
          onChange={(e) => dispatch(handleChange(e.target.value))}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {states.tasks.map((task, index) => {
          return (
            <li
              key={index}
              style={
                states.completedTasks.includes(index)
                  ? { textDecoration: "line-through" }
                  : {}
              }
            >
              <span>{task}</span>
              <DeleteIcon onClick={() => dispatch(handleDelete(index))} />
              <EditIcon onClick={() => dispatch(handleEdit(index))} />
              <CheckIcon onClick={() => dispatch(handleComplete(index))} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
