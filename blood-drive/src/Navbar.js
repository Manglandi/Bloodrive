import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Blood Drive</h1>
            <div className="links">
            <a href="/">Home</a>
            <Link to="/Request">Blood Request</Link>
            <a href="/CreateAccount">Create Account</a>
            <a href="/">About</a>
            <a href="/Login">Login</a>
            <a href="/Donors">Donors</a>
            </div>
        </nav>
    );
}
 
export default Navbar;
