import { Link, Outlet } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store/store";
import { signOut } from "../../store/authSlice";

const Navbar = () => {
    const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated);
    const dispatch = useDispatch();
    const logOut = () => {
        console.log("SignOut");
        dispatch(signOut())
    }
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {isAuthenticated && (
                    <li>
                        <Link to="/profile">My Profile</Link>
                    </li>
                )}

                {isAuthenticated ? (
                    <li>
                        <Link to="/" onClick={logOut}>Sign Out</Link>
                    </li>
                ) : (
                    <li>
                        <Link to="/login">Sign In</Link>
                    </li>
                )}
            </ul>
            <Outlet />
        </div>
    )
}

export default Navbar
