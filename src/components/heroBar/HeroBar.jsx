import { Link } from "react-router-dom";
import "./herobar.css";

export default function HeroBar() {
    const user = true;
    return (
        <div className="hero">
            <div className="heroLeft">
                <i className="heroIcon fa-brands fa-facebook-f"></i>
                <i className="heroIcon fa-brands fa-twitter"></i>
                <i className="heroIcon fa-brands fa-instagram"></i>
            </div>
            <div className="heroCenter">
                <ul className="heroList">

                    <li className="heroListItem">
                        <Link className="link" to="/">
                            ACCEUIL
                        </Link>
                    </li>

                    <li className="heroListItem">
                        <Link className="link" to="/">
                            A PROPOS
                        </Link>
                    </li>

                    <li className="heroListItem">
                        <Link className="link" to="/">
                            CONTACT
                        </Link>
                    </li>

                    <li className="heroListItem">
                        <Link className="link" to="/write">
                            PUBLIER
                        </Link>
                    </li>
                    {user && <li className="heroListItem signOut">Se déconnecter</li>}
                </ul>
            </div>
            <div className="heroRight">

                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className="heroBarImg"
                            src="./profile.png"
                            alt="Header background"
                        />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="heroSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div >
    );
}
