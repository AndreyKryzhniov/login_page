import React, {useState} from 'react';
import s from './Login.module.css';
import {NavLink} from "react-router-dom";
import {putLoginTC} from '../redux/loginReducer'
import {useDispatch} from 'react-redux';

const Login: React.FC = () => {

  let [email, setLoginState] = useState('')
  let [password, setPasswordState] = useState('')
  let [rememberMe, setValueState] = useState(false)
  let dispatch = useDispatch()

  let sendData = () => {
    dispatch(putLoginTC(email, password, rememberMe))
  }

  return (
    <div className={s.login}>
      <span>sing in</span>
      <input value={email} onChange={(e) => setLoginState(e.target.value)}/>
      <input value={password} onChange={(e) => setPasswordState(e.target.value)} type={'password'}/>
      <NavLink to={'/password_recover'}>Forgot password?</NavLink>
      <input type={'checkbox'} placeholder={'Remember Me'} onChange={() => setValueState(!rememberMe)} checked={rememberMe}/>
      <button onClick={sendData}>Sing In</button>
      <NavLink to={'/registration'}>Registration</NavLink>
    </div>
  );
}

export default Login
