import {createSlice} from '@reduxjs/toolkit'
const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todos:null,
        isFetching:false,
        error:false
    },
    reducer:{
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
        }
    }
})
export const {todoStart,todoSuccess,todoFailure} = todoSlice.actions;
export default todoSlice.reducer;
