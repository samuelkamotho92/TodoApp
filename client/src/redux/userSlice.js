import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name:"user",
    initialState:{
        user:[],
        isFetching:false,
        error:false
    },
    reducers:{
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
        },
        logOut: (state) => {
            state.user = null;
    },
    }
})
export const {loginStart,loginSuccess,loginFailure,logOut} = userSlice.actions;
export default userSlice.reducer;
