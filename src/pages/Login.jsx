import React from 'react';
import { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

function Login() {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    

    const login = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return ( 
        <div style={{height: '80vh', display: 'flex', justifyContent: 'center', flexDirection: 'column'}} className="container">

            <div>
                <h2 style={{textAlign: 'center'}}>Login page</h2>
                <br/>
                <form onSubmit={login}>
                    <MyInput style={{margin: '0 auto', marginBottom: '7px', maxWidth: '350px'}} type="text" placeholder="Input Login"/>
                    <MyInput style={{margin: '0 auto', marginBottom: '7px', maxWidth: '350px'}} type="password" placeholder="Input password" />
                    <MyButton style={{margin: '0 auto'}}>Login</MyButton>
                </form>
            </div>
        </div>
     );
}

export default Login;