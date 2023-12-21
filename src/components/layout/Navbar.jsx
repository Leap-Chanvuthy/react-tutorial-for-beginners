import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <h4>T-Article</h4>
            </div>
            <ul className="nav-list">
                <Link to='/' className="link" ><li className="nav-item">Home</li></Link>
                <Link to='/create' className="link"><li className="nav-item">Create</li></Link>
            </ul>
        </nav>
     );
}
 
export default Navbar;