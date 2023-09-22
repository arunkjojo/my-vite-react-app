import { Outlet, redirect } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from "../../store/authSlice";
import { RootState } from "../../store/store";
import Button from "../../components/Button/Button";

const Navbar = () => {
    const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated);
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(signOut())
    }
    const logIn = () => {
        dispatch(signIn())
    }
    return (
        <div>
            <ul>
                <li>
                    <Button size="small" buttonType="button" label="Home" onClick={() => redirect('/')} />
                </li>
                {isAuthenticated ? (
                    <>
                        <li>
                            <Button size="small" buttonType="button" label="My Profile" onClick={() => redirect('/profile')} />
                        </li>
                        <li>
                            <button onClick={logOut} type="button">
                                Sign Out
                            </button>
                        </li>
                    </>
                ) : (
                    <li>
                        <button onClick={logIn} type="button">
                            Sign In
                        </button>
                    </li>
                )}
            </ul>
            <Outlet />
        </div>
    )
}

export default Navbar
