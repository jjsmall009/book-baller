import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";

import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <div className="page-content-zone">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
