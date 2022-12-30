import { useAuthContext } from "./hooks/useAuthContext";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
    Navigate,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import UserHomepage from "./pages/UserHomepage";

// layouts
import RootLayout from "./layouts/RootLayout";

function App() {
    // Manage the routing and user access
    const { user } = useAuthContext();

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={user ? <Navigate to="/my_books" /> : <Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="about" element={<About />} />
                <Route path="help" element={<Help />} />
                <Route
                    path="my_books"
                    element={user ? <UserHomepage /> : <Navigate to="/login" />}
                />

                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
