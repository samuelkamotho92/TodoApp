
import { useContext, useEffect, useState } from 'react'
import { apiDomain } from '../utils/utils'
import axios from 'axios'
import { Context } from '../context/userContext/Context'
import './updateform.css'


const UpdateForm = ({ setShowEditForm, todo, getTodos }) => {
    const [description, setDescription] = useState('')

    useEffect(() => {
        setDescription(todo.description)
    }, [])


    const { user } = useContext(Context)
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`${apiDomain}/todo/${todo.id}`, { description: description },
            { headers: { "Authorization": `${user.token}` } }
        ).then((res) => {
            getTodos()
            alert(res.data.message)

        }).catch(({ response }) => {
            alert(response.response.data.error)
        })
    }
    return (
        <div className='updateForm'>
            <form className='form'>
                <textarea
                    value={description} onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    id="description"
                ></textarea>
                <div className="btn-wrapper">
                    <button onClick={() => setShowEditForm(false)}>exit</button>
                    <button type='submit' onClick={handleSubmit}>Add</button>
                </div>
            </form>
        </div>
    )
}
export default UpdateForm