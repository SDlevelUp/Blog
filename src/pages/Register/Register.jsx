import React from 'react'
import "./register.css";

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">S'enregistrer</span>
            <form className="registerForm">
                <label>Pseudo</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Choisir un pseudo"
                />

                <label>Email</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="Saisir un email valide"
                />

                <label>Mot de passe</label>
                <input
                    type="password"
                    className="registerInput"
                    placeholder="Choisir un mot de passe"
                />

                <button className="registerButton">S'enregistrer</button>
            </form>
            <button className="registerLoginButton">Se connecter</button>
        </div>
    )
}
