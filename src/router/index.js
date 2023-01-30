import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/', element: <Posts/>},
    {path: '/posts', element: <Posts/>},
    {path: '/about', element: <About/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '*', element: <Error/>},
];

export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: '/about', element: <About/>},
];