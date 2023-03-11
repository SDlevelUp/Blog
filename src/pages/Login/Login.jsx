import React from 'react'
import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Connexion</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Email" />

                <label>Mot de passe</label>
                <input type="password" className="loginInput" placeholder="Mot de passe" />
                <button className="loginButton">Se connecter</button>
            </form>
            <button className="loginRegisterButton">S'enregistrer</button>
        </div>
    )
}
