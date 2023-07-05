import './profile.css'
import userAvator from '../assets/userAvator.webp'
import { useSelector } from "react-redux";
export default function Profile() {
    console.log(useSelector((state)=>state.user.user));
    const {email,username,id} = useSelector((state)=>state.user.user)
console.log(email,username,id)
    return (
        <div className='profile'>
            <div className="userAvator">
                <img className='userAvator-img' src={userAvator} alt="no_pic" />
            </div>
            <div className="user-Details">
                <h2>Username</h2>
                <p>{username}</p>
                <h2>Email</h2>
                <p>{email}</p>
                <h2>User-Id</h2>
                <p>{id}</p>
            </div>
        </div>
    )
}
