import React from 'react'
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerSmallTitle">React & Node</span>
                <span className="headerLargeTitle">Blog</span>
            </div>
            <img className="headerImg" src="./background.jpg" alt="Header backgrund" />
        </div>
    )
}
