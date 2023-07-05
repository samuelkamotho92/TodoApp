import {loginStart,loginSuccess,loginFailure,logOut} from './userSlice';
import {todoStart,todoSuccess,todoFailure, deleteTodoStart, deleteTodoSuccess, deleteTodoFailure} from './todoSlice';
import { createTodoStart, createTodoSuccess,createTodoFailure } from './todoSlice';
import axios from 'axios';
import { apiDomain } from '../utils/utils';
export const loginUser = async(dispatch,user)=>{
    console.log(user,dispatch);
dispatch(loginStart());
    try{
const {data} = await axios.post(`${apiDomain}/auth/login`,user);
dispatch(loginSuccess(data));
alert('logged in succesfully');
console.log(data);
    }catch(err){
console.log(err)
dispatch(loginFailure());
    }
}
export const logOutuser = async(dispatch)=>{
    console.log(dispatch);
dispatch(logOut())
}

export  const getTodosData = async(dispatch,user)=>{
    dispatch(todoStart());
    console.log(`${apiDomain}/todos`)
    try{
const {data} = await  axios.get(`${apiDomain}/todos`,
{ headers: { "authorization": `${user.token}` } }
);
console.log(data);
dispatch(todoSuccess(data));
    }catch(err){
console.log(err);
dispatch(todoFailure())
    }
}

export const deleteTodo = async (id,dispatch,user)=>{
    console.log(id,'val');
    dispatch(deleteTodoStart())
    try
    {
      await axios.delete(`${apiDomain}/todo/${id}`,
      { headers: { "authorization": `${user.token}` } }
      );
      dispatch(deleteTodoSuccess(id))
    }catch(err){
  dispatch(deleteTodoFailure());
    }
  }

  export const addTodo = async(dispatch,data,user) =>{
    dispatch(createTodoStart())
    try {
        console.log(data,user.token)
      await axios.post(`${apiDomain}/todos`,data,
        { headers: { "authorization": `${user.token}` } }
        ) 
        dispatch(createTodoSuccess(data));
    }
    catch(err){
        console.log(err);
        dispatch(createTodoFailure())
    }
  }