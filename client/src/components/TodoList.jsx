import { useEffect, useContext, useState } from 'react'
import { apiDomain } from '../utils/utils'
import axios from 'axios'
import { Context } from '../context/userContext/Context'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import './todolist.css'
import UpdateForm from './UpdateForm'
function TodoList() {
    const [showEditForm, setShowEditForm] = useState(false)
    const [todos, setTodos] = useState([])
    const [tempTodo, setTempTodo] = useState('')
    const { user } = useContext(Context)
    const getTodos = async () => {
        const res = await axios.get(`${apiDomain}/todos`,
            { headers: { "Authorization": `${user.token}` } }
        )
        setTodos(res.data)
    }

    useEffect(() => {
        getTodos()
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`${apiDomain}/todo/${id}`,
            { headers: { "Authorization": `${user.token}` } }
        ).then((res) => {
            alert(res.data.message)
        }).catch(({ response }) => {
            alert(response.response.data.error)
        })
        getTodos();
    }

    const handleToggle = (data) => {
        setTempTodo(data)
        setShowEditForm(!showEditForm)
    }



    return (
        <div className='todo_wrapper'>
            {todos && todos.map((todo, index) => {
                return (

                    <div className="card" key={todo.id}>
                        <p>{todo.description}</p>
                        <AiFillDelete className='delIcon' onClick={() => handleDelete(todo.id)} />
                        <AiFillEdit className='delIcon' onClick={() => handleToggle(todo)} />
                        {
                            showEditForm && <UpdateForm setShowEditForm={setShowEditForm} todo={tempTodo} getTodos={getTodos} />
                        }
                    </div>

                )
            })
            }
        </div>
    )
}




export default TodoList