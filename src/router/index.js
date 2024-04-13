import Layout from "@/pages/Layout";
import Login from "@/pages/Login"
import About from "@/pages/About";
// import Home from "@/pages/Home";
// import Article from "@/pages/Article";
// import Publish from "@/pages/Publish";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
import { Suspense } from "react";
const Home = lazy(() => import('@/pages/Home'))
const Article = lazy(() => import('@/pages/Article'))
const Publish = lazy(() => import('@/pages/Publish'))

const router = createBrowserRouter([
    //{ path: '/', element: <AuthRoute><Layout /></AuthRoute> }, 没有token跳转到登录画面
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Suspense fallback={"加载中"}><Home /></Suspense> },
            { path: 'article', element: <Suspense fallback={"加载中"}><Article /></Suspense> },
            { path: 'publish', element: <Suspense fallback={"加载中"}><Publish /></Suspense> },
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/about', element: <About /> },
])
export default router