import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
    const signOut = () => {
        console.log("SignOut")
    }
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">My Profile</Link>
                </li>

                <li>
                    <Link to="/login">Sign In</Link>
                </li>

                <li>
                    <Link to="/" onClick={signOut}>Sign Out</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Navbar
