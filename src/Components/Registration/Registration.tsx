import React from 'react';
import s from '../Registration/registration.module.css';


const Registration: React.FC = () => {
  return (
    <div className={s.registration}>
        <span>register</span>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <button>Register</button>
        <a href="#">Sign in</a>
    </div>
  );
}

export default Registration;
