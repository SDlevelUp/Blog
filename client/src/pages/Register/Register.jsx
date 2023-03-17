import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };
    return (
        <div className="register">
            <span className="registerTitle">S'ENREGISTRER</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Pseudo</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Enter your username..."
                    autoComplete="on"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Enter your email..."
                    autoComplete="on"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Mot de passe</label>
                <input
                    type="password"
                    className="registerInput"
                    placeholder="Enter your password..."
                    autoComplete="on"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">
                    S'ENREGISTRER
                </button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">
                    Connexion
                </Link>
            </button>
            {error && <span style={{ color: "red", marginTop: "10px" }}>Oooups....quelque chose ne va pas!</span>}
        </div>
    );
}