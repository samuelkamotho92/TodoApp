import { Link } from "react-router-dom"
import { FaHome, FaInfoCircle, FaBook, FaSignOutAlt } from "react-icons/fa"
import './header.css'
import { useContext } from 'react'
import { Context } from "../context/userContext/Context";
import { useNavigate } from "react-router-dom";
function Header() {
    const { user, dispatch } = useContext(Context);
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };
    return (
        <div className="header" >
            <div className="header-Wrapper" style={{}}>
                <Link to='/' style={{ color: "brown" }}><FaHome id="icons" />Home</Link>
                <Link to='/register' style={{ color: "purple" }}><FaInfoCircle id="icons" /> Register</Link>
                {user && (
                    <>
                        <Link to='/todos' style={{ color: "green" }}><FaBook id="icons" /> Todos</Link>
                        <Link onClick={handleLogout} style={{ color: "red" }}><FaSignOutAlt id="icons" /> Logout</Link>
                    </>
                )

                }
            </div>
        </div>
    )
}

export default Header