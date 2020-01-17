import React from 'react';
import s from './Login.module.css';
import {NavLink} from "react-router-dom";



const Login: React.FC = () => {

  return (
    <div className={s.login}>
      <span>sing in</span>
      <input/>
      <input/>
      <NavLink to={'/password_recover'}>Forgot password?</NavLink>
      <input type={'checkbox'} placeholder={'Remember Me'}/>
      <button>Sing In</button>
      <NavLink to={'/registration'}>Registration</NavLink>
    </div>
  );
}

export default Login;
