import HeroBar from "./components/heroBar/HeroBar";
import HomePage from "./pages/HomePage/HomePage";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import { Routes, Route } from "react-router-dom"

function App() {
  const currentUser = true;
  return (
    <div className="App">
      <HeroBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/register" element={currentUser ? <HomePage /> : <Register />} />

        <Route path="/login" element={currentUser ? <HomePage /> : <Login />} />

        <Route path="/post/:id" element={<Single />} />


        <Route path="/write" element={currentUser ? <Write /> : <Login />} />


        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />

      </Routes>
    </div>
  );
}

export default App