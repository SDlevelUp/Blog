import { useLocation } from "react-router";
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

import "./homepage.css";

export default function HomePage() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <Header />
            <div className="homePage">
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}
