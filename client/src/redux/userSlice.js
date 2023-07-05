import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        isFetching:false,
        error:false
    },
    reducer:{
        loginStart:(state)=>{
       state.isFetching = true;
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false;
            state.user = action.payload;
            state.error = false;
        },
        loginFailure:(state)=>{
state.isFetching = false;
state.error = true
        }
    }
})
export const {loginStart,loginSuccess,loginFailure} = userSlice.actions;
export default userSlice.reducer;
