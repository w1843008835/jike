import Layout from "@/pages/Layout";
import Login from "@/pages/Login"
import About from "@/pages/About";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
const router = createBrowserRouter([
    //{ path: '/', element: <AuthRoute><Layout /></AuthRoute> }, 没有token跳转到登录画面
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'article', element: <Article /> },
            { path: 'publish', element: <Publish /> },
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/about', element: <About /> },
])
export default router