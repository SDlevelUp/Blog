import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <span className="sidebarTitle">A PROPOS DE MOI</span>
            <div className="sidebarItem">
                <img
                    src="./aboutme.jpeg"
                    alt=""
                />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATÉGORIES</span>
                <ul className="sidebarList">

                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Tech">
                            Tech
                        </Link>
                    </li>

                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Lifestyle">
                            Lifestyle
                        </Link>
                    </li>

                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Lifestyle">
                            Bons plans
                        </Link>
                    </li>

                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Tips">
                            Tips
                        </Link>
                    </li>


                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=  Diver">
                            Divers
                        </Link>
                    </li>

                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat= Digital">
                            Digital
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">SUIVEZ-NOUS</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-f"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div >
    );
}