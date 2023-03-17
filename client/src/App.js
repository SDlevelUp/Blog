import { Context } from "./context/Context";
import { useContext } from "react";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import HeroBar from "./components/heroBar/HeroBar";

// Pages
import Home from "./pages/Home/Home"
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


function App() {
    const { user } = useContext(Context);
        return (
            <React.StrictMode>
            <Router>
                <HeroBar />
                <Routes>

                <Route exact path="/" element={<Home />} />

                <Route path="/register" element={user ? <Home /> : <Register />} />

                <Route path="/login" element={user ? <Home /> : <Login />} />

                <Route path="/write" element={user ? <Write /> : <Register />} />

                <Route path="/settings" element={user ? <Settings /> : <Register />} />

                <Route path="/post/:postId" element={<Single />} />
            </Routes>
        </Router>
    </React.StrictMode>

    )
}
export default App;