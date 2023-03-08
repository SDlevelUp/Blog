
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <span className="sidebarTitle">ABOUT ME</span>
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
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Lifestyle</li>
                    <li className="sidebarListItem">Bons plans</li>
                    <li className="sidebarListItem">Tips</li>
                    <li className="sidebarListItem">Diver</li>
                    <li className="sidebarListItem">Digital</li>
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
        </div>
    );
}