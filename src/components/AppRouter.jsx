import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { privateRoutes, publicRoutes } from "../router";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/loader/Loader";

function AppRouter() {
    const {isAuth, isLoading} = useContext(AuthContext);

    const startPage = useNavigate();
    useEffect(() => {
        isAuth ? startPage("/posts") : startPage("/login");
    }, [isAuth])

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