import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Admin-Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addCategory">Add Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categoryList">Category List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addPost">Add Post</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/postList">Post List</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav" style={{ position: "absolute", right: " 10px" }}>
                            <li className="nav-item">
                                <Link className="nav-link" to="/postList">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;