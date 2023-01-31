import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { privateRoutes, publicRoutes } from "../router";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/loader/Loader";

function AppRouter() {
    const {isAuth, isLoading} = useContext(AuthContext);

    const startPage = useNavigate();
    const location = useLocation()
    useEffect(() => {
        if(isAuth){
            if(localStorage.getItem('pageLocation') !== undefined){
                startPage(localStorage.getItem('pageLocation'))
            }else{
                startPage('/posts')
            }
        }else{
            startPage("/login")
        }
    }, [isAuth])

    useEffect(() => {
        if(location.pathname !== '/login' && location.pathname !== '/posts'){
            localStorage.setItem('pageLocation', location.pathname)
        }
    }, [location])

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