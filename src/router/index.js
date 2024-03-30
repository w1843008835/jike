import Layout from "@/pages/Layout";
import Login from "@/pages/Login"
import About from "@/pages/About";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    { path: '/', element: <Layout /> },
    { path: '/login', element: <Login /> },
    { path: '/about', element: <About /> },
])
export default router