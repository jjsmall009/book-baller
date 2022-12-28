import { Outlet, NavLink } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

export default function RootLayout() {
    return (
        <>
            <Navbar />
            <div className="page-content-zone">
                <Outlet />
            </div>
        </>
    );
}
