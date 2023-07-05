import {createSlice} from '@reduxjs/toolkit'
const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todos:null,
        isFetching:false,
        error:false
    },
    reducers:{
        todoStart:(state)=>{
       state.isFetching = true;
        },
        todoSuccess:(state,action)=>{
            state.isFetching = false;
            state.todos = action.payload;
            state.error = false;
        },
        todoFailure:(state)=>{
state.isFetching = false;
state.error = true
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
    }
})
export const {todoStart,todoSuccess,todoFailure,deleteTodoStart,deleteTodoSuccess,deleteTodoFailure} = todoSlice.actions;
export default todoSlice.reducer;
