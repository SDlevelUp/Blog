// import axios from "axios";
// import { useContext, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
// import "./login.css";

// export default function Login() {
//     const userRef = useRef();
//     const passwordRef = useRef();
//     const { dispatch, isFetching } = useContext(Context);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         dispatch({ type: "LOGIN_START" });
//         try {
//             const res = await axios.post("/auth/login", {
//                 username: userRef.current.value,
//                 password: passwordRef.current.value,
//             });
//             dispatch({
//                 type: "LOGIN_SUCCESS",
//                 payload: res.data
//             });
//         } catch (err) {
//             dispatch({ type: "LOGIN_FAILURE" });
//         }
//     };

//     return (
//         <div className="login">
//             <span className="loginTitle">Login</span>
//             <form className="loginForm" onSubmit={handleSubmit}>
//                 <label>Username</label>
//                 <input
//                     type="text"
//                     className="loginInput"
//                     autoComplete="on"
//                     placeholder="Enter your username..."
//                     ref={userRef}
//                 />
//                 <label>Password</label>
//                 <input
//                     type="password"
//                     className="loginInput"
//                     autoComplete="on"
//                     placeholder="Enter your password..."
//                     ref={passwordRef}
//                 />
//                 <button className="loginButton" type="submit" disabled={isFetching}>
//                     Login
//                 </button>
//             </form>
//             <button className="loginRegisterButton">
//                 <Link className="link" to="/register">
//                     Register
//                 </Link>
//             </button>
//         </div>
//     );
// }

import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: res.data,
            });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
            setError("Invalid username or password.");
        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    autoComplete="on"
                    placeholder="Enter your username..."
                    ref={usernameRef}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    autoComplete="on"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                />
                <button className="loginButton" type="submit" disabled={isFetching}>
                    Login
                </button>
                {error && <span className="loginError">{error}</span>}
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">
                    Register
                </Link>
            </button>
        </div>
    );
}
