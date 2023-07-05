import {loginStart,loginSuccess,loginFailure,logOut} from './userSlice';
import {todoStart,todoSuccess,todoFailure, deleteTodoStart, deleteTodoSuccess, deleteTodoFailure, updateTodoStart, updateTodoSuccess, updateTodoFailure} from './todoSlice';
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

  export const addTodo = async(dispatch,data) =>{
    dispatch(createTodoStart())
    try {
      await axios.post(`${apiDomain}/todos`,data) 
        dispatch(createTodoSuccess(data));
    }
    catch(err){
        console.log(err);
        dispatch(createTodoFailure())
    }
  }

  export const updateTodo = async(todo,id,dispatch)=>{
    console.log(todo,id,'all products');
    dispatch(updateTodoStart());
try{
  const {data} = await axios.put(`${apiDomain}/todo/${id}`,todo
  );
  console.log(data);
// const val = await getAuction();
// console.log(val,'my val');
  dispatch(updateTodoSuccess({todo,id}));
// console.log(data.auction);

}catch(err){
console.log(err);
dispatch(updateTodoFailure());
}
  }