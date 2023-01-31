import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { privateRoutes, publicRoutes } from "../router";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/loader/Loader";

function AppRouter() {
    const {isAuth, isLoading} = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();
    useEffect(() => {
        const path = localStorage.getItem('prevPath');
        if (isAuth) {
            path !== '/login' ? navigate(path) : navigate('/posts')
        } else {
            navigate('/login')
        }
    }, [isAuth]) ;

    useEffect(() => {
        localStorage.setItem('prevPath',location.pathname);
    }, [location]);

    if (isLoading) {
        return <Loader/>
    }

    return ( 
        <Routes>
        (isAuth && isLoading)
        ?
            {privateRoutes.map(route => 
                <Route path={route.path} element={route.element} key={route.path}/>
            )}
        :
            {publicRoutes.map(route => 
                <Route path={route.path} element={route.element} key={route.path}/>
            )}
        </Routes>
     );
}

export default AppRouter;