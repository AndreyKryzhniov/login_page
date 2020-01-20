import React, {useState} from 'react';
import s from './Login.module.css';
import {NavLink} from "react-router-dom";
import {errorLoginAC, putLoginTC} from '../redux/loginReducer'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../redux/store';
import loading from '../Components/Registration/svgImages/loading.svg'

const Login: React.FC = () => {

    let [email, setLoginState] = useState('')
    let [password, setPasswordState] = useState('')
    let [rememberMe, setValueState] = useState(false)
    let error = useSelector((store: AppStateType) => store.login.error);
    let isAuth = useSelector((store: AppStateType) => store.login.isLoading);
    // let token = useSelector((store: AppStateType) => store.login.token)
    // let [tokenValue, setToken] = useState(token)

    let dispatch = useDispatch()

    let validationEmail = (email: string) => {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        return reg.test(String(email).toLowerCase())
    }

    let sendData = () => {
        if (!validationEmail(email) || password.length < 6) {
            dispatch(errorLoginAC('Email/Password введен не корректно'))
        } else {
            dispatch(putLoginTC(email, password, rememberMe))
        }
    }

    return (
        <div className={s.login}>
            <span>sing in</span>
            <span className={s.error}>{error}</span>
            <input value={email} onChange={(e) => setLoginState(e.target.value)}/>
            <input value={password} onChange={(e) => setPasswordState(e.target.value)} type={'password'}/>
            <NavLink to={'/password_recover'}>Forgot password?</NavLink>
            <input type={'checkbox'} placeholder={'Remember Me'} onChange={() => setValueState(!rememberMe)}
                   checked={rememberMe}/>
            <button onClick={sendData} disabled={isAuth}>Sing In</button>
            <NavLink to={'/registration'}>Registration</NavLink>
            {isAuth &&
            <img src={loading}/>
            }
        </div>
    );
}

export default Login
