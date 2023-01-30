import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import '../../../styles/Navbar.css'

function Navbar() {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = e => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return ( 
        <div className="navbar"> 
            <div className="container">
                <div className="navbar__inner">
                   <h1>ffs</h1>
                    <div className="navbar__links">
                        <Link className="navbar__link" to="/about">About</Link>
                        {isAuth && <Link className="navbar__link" to="/posts">Posts</Link>}
                        {isAuth 
                        ? 
                        <Link className="navbar__link logout" onClick={logout}>Logout</Link>
                        : 
                        <Link className="navbar__link logout" to="/login">Login</Link>}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Navbar;