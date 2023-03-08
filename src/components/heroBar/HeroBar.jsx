import React from "react";
import "./herobar.css";

export default function HeroBar() {
    return (
        <div className="hero">
            <div className="heroLeft">
                <i className="heroIcon fa-brands fa-facebook-f"></i>
                <i className="heroIcon fa-brands fa-twitter"></i>
                <i className="heroIcon fa-brands fa-instagram"></i>
            </div>
            <div className="heroCenter">
                <ul className="heroList">
                    <li className="heroListItem">ACCEUIL</li>
                    <li className="heroListItem">A PROPOS</li>
                    <li className="heroListItem">CONTACT</li>
                    <li className="heroListItem">PUBLIER</li>
                    <li className="heroListItem">SE DÉCONNECTER</li>
                </ul>
            </div>
            <div className="heroRight">
                <img className="heroBarImg" src="./profile.png" alt="Header background" />
                <i className="heroSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}
