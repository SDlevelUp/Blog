import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./herobar.css";

export default function HeroBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="top">
            <div className="topLeft">
                <i className="sidebarIcon fa-brands fa-facebook-f"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            ACCEUIL
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            A PROPOS
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            CONTACT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            PUBLIER
                        </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "SE DÉCONNECTER"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings">
                        <img className="topImg" src={PF + user.profilePic} alt="" />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="linkInOut" to="/login">
                                SE CONNECTER
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="linkInOut" to="/register">
                                S'ENREGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}