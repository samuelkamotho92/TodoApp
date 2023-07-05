import Sidenav from "../components/Sidenav"
import Mainnav from "../components/Mainnav"
function Blogs() {
    return (
        <div style={{ height: "85vh", display: "flex" }}>
            {/* sidenav*/}
            <Sidenav />
            {/* main page*/}
            <Mainnav />
        </div>
    )
}

export default Blogs