import { useEffect, useContext, useState } from 'react'
import { apiDomain } from '../utils/utils'
import axios from 'axios'
import { Context } from '../context/userContext/Context'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import './todolist.css'
import UpdateForm from './UpdateForm'
import { getTodosData } from '../redux/apiCall'
import {useDispatch,useSelector} from 'react-redux'
import { deleteTodo } from '../redux/apiCall'
function TodoList() {
    const [showEditForm, setShowEditForm] = useState(false)
    const [tempTodo, setTempTodo] = useState('')
    const disaptch = useDispatch();
    const todos = useSelector((state)=>state.todos.todos)
   const user = useSelector((state)=>state.user.user);
    console.log(todos);

    useEffect(() => {
        getTodosData(disaptch,user);
    }, [])

    const handleDelete = async (id) => {
        console.log('delete data');
        deleteTodo(id,disaptch,user)
    //     await axios.delete(`${apiDomain}/todo/${id}`,
    //         { headers: { "Authorization": `${user.token}` } }
    //     ).then((res) => {
    //         alert(res.data.message)
    //     }).catch(({ response }) => {
    //         alert(response.response.data.error)
    //     })
    //     getTodos();
    }

    const handleToggle = (data) => {
        setTempTodo(data)
        setShowEditForm(!showEditForm)
    }



    return (
        <div className='todo_wrapper'>
            {todos && todos.map((todo, index) => {
                return (

                    <div className="card" key={todo?.id}>
                        <p>{todo?.description}</p>
                        <AiFillDelete className='delIcon' onClick={() => handleDelete(todo?.id)} />
                        <AiFillEdit className='delIcon' onClick={() => handleToggle(todo)} />
                        {
                            showEditForm && <UpdateForm setShowEditForm={setShowEditForm} todo={tempTodo} getTodosData={getTodosData} />
                        }
                    </div>

                )
            })
            }
        </div>
    )
}




export default TodoList