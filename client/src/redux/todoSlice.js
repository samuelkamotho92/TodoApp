import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    todoStart: (state) => {
      state.isFetching = true;
    },
    todoSuccess: (state, action) => {
      state.isFetching = false;
      state.todos = action.payload;
      state.error = false;
    },
    todoFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteTodoStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteTodoSuccess: (state, action) => {
      state.isFetching = false;
      state.todos.splice(
        state.todos.findIndex((todo) => todo.id === action.payload),
        1
      );
    },
    deleteTodoFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    createTodoStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createTodoSuccess: (state, action) => {
      state.isFetching = false;
      state.todos.push(action.payload);
      state.error = false;
    },
    createTodoFailure: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    updateTodoStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateTodoSuccess: (state, action) => {
      state.isFetching = false;
      state.todos[
        state.todos.findIndex((todoVal) => todoVal.id === action.payload.id)
      ] = action.payload.todo;
    },
    updateTodoFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const {
  todoStart,
  todoSuccess,
  todoFailure,
  deleteTodoStart,
  deleteTodoSuccess,
  deleteTodoFailure,
  createTodoStart,
  createTodoSuccess,
  createTodoFailure,
  updateTodoFailure,
  updateTodoSuccess,
  updateTodoStart
} = todoSlice.actions;
export default todoSlice.reducer;
