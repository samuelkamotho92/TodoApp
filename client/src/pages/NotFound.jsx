import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div style={{ height: "85vh", textAlign: "center", }}>
            <h1 >
                Oops!
            </h1>
            <p >404 - Page not found!</p>
            <Link to='/' style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <FaHome />
                Back To Home
            </Link>
        </div>
    )
}

export default NotFound