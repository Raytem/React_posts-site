import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import { AuthContext } from './context';
import About from './pages/About';
import Posts from './pages/Posts';
import './styles/App.css';

function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsloading(false);
    }, []);
    
    return (
        <div className="App">
            <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
                <BrowserRouter>
                    <Navbar/>
                    <AppRouter/>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
