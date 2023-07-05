import './mainnav.css'
import { useContext } from 'react'
import { Context } from '../context/todoContext/Context'
import Profile from './Profile';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
export default function Mainnav() {
    const { ui } = useContext(Context);
    return (
        <div className='mainnav'>
            {
                ui == 'add' ? (
                    <div className="mainnav_wrapper">
                        <h2>Add Todos</h2>
                        <AddTodo />
                    </div>
                ) : ui == 'view' ? (
                    <div className="mainnav_wrapper" >
                        <h2>View All Todos</h2>
                        <TodoList />
                    </div>
                ) : ui == 'profile' ? (
                    <div className="mainnav_wrapper">
                        <h2>User Profile</h2>
                        <Profile />
                    </div>
                ) : null

            }
        </div >
    )
}


