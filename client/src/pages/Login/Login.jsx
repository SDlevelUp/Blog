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
            setError("Pseudo ou mot de passe invalide.");
        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Connexion</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Pseudo</label>
                <input
                    type="text"
                    className="loginInput"
                    autoComplete="on"
                    placeholder="Choisis ton pseudo..."
                    ref={usernameRef}
                />
                <label>Mot de passe</label>
                <input
                    type="password"
                    className="loginInput"
                    autoComplete="on"
                    placeholder="Choisis ton mot de passe..."
                    ref={passwordRef}
                />
                <button className="loginButton" type="submit" disabled={isFetching}>
                    CONNEXION
                </button>
                {error && <span className="loginError">{error}</span>}
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">
                    S'ENREGISTRER
                </Link>
            </button>
        </div>
    );
}
