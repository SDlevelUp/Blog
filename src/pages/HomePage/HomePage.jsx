import React from 'react'
import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';

import "./homepage.css";

export default function HomePage() {
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
