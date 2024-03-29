import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
  name: "todoSlice",
  initialState: {
    inputValue: "",
    tasks: [],
    isEditing: false,
    completedTasks: [],
  },
  reducers: {
    handleChange: function (state, payload) {
      state.inputValue = payload.payload;
    },
    handleSubmit: function (state) {
      if (state.isEditing === false)
        state.tasks = [...state.tasks, state.inputValue];
      else state.tasks[state.isEditing] = state.inputValue;

      state.inputValue = "";
    },
    handleDelete: function (state, payload) {
      const newTasks = (state.tasks = state.tasks.filter((task, indx) => {
        return payload.payload !== indx;
      }));
      state.tasks = newTasks;
    },
    handleEdit: function (state, payload) {
      // UPAR PAHUCHAYA
      state.inputValue = state.tasks[payload.payload];

      state.isEditing = payload.payload;
    },
    handleComplete: function (state, payload) {
      state.completedTasks = [...state.completedTasks, payload.payload];
    },
  },
});

export const {
  handleChange,
  handleSubmit,
  handleDelete,
  handleEdit,
  handleComplete,
} = todo.actions;

const todoReducer = todo.reducer;
export default todoReducer;
