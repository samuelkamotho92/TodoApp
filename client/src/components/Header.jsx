import { Link } from "react-router-dom"
import { FaHome, FaInfoCircle, FaBook, FaSignOutAlt } from "react-icons/fa"
import './header.css'
import { useContext } from 'react'
import { Context } from "../context/userContext/Context";
import { useNavigate } from "react-router-dom";
import { logOutuser } from "../redux/apiCall";
import { useSelector,useDispatch } from 'react-redux';
function Header() {
    const dispatch = useDispatch();
    console.log(useSelector((state)=>state.user.user));
    const username = useSelector((state)=>state.user?.user?.username)
  
    const navigate = useNavigate();
// const usernam = true;
// const email = 'samleader'
    const handleLogout = () => {
        console.log('logging out');
        logOutuser(dispatch);
        // navigate("/");
    };
    return (
        <div className="header" >
            <div className="header-Wrapper" style={{}}>
                <Link to='/' style={{ color: "brown" }}><FaHome id="icons" />Home</Link>
                {username ? (
                    <>
                        <Link to='/todos' style={{ color: "green" }}><FaBook id="icons" /> Todos</Link>
                        <Link onClick={handleLogout} style={{ color: "red" }}><FaSignOutAlt id="icons" /> Logout</Link>
                        <p>email</p>
                    </>
                ):(
                    <>
                    <Link to='/' style={{ color: "purple" }}><FaInfoCircle id="icons" /> Login</Link>
                    <Link to='/register' style={{ color: "purple" }}><FaInfoCircle id="icons" /> Register</Link>
                    </>
                )

                }
            </div>
        </div>
    )
}

export default Header