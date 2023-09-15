import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store/store";
import { signIn } from '../../store/authSlice';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authenticate = () => {
        console.log("SignIn");
        dispatch(signIn())
    }
    useEffect(() => {
        if (isAuthenticated) navigate("/profile");
    }, [isAuthenticated, navigate])
    return (
        <div>
            <button onClick={authenticate}>Login</button>
        </div>
    );
}

export default Login
