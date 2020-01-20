import React, {useEffect, useState} from 'react';
import s from '../Registration/registration.module.css';
import {useDispatch, useSelector} from "react-redux";
import {sendRegistrationRequest} from "../../redux/registrationReducer";
import {NavLink} from "react-router-dom";
import loading from "../Registration/svgImages/loading.svg";


const Registration: React.FC = (props:any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector((store:any) => store.registration.error);
    const isloading = useSelector((store:any) => store.registration.isLoading);
    useEffect(() => {}, [error]);
    useEffect(() => {}, [isloading]);

  return (
    <div className={s.registration}>
        <span>Register</span>
        <div>
            <span>Email:</span>
            <input type="text" onChange={(e: any) => {setEmail(e.currentTarget.value)}}/>
        </div>
        <div>
            <span>Password:</span>
            <input type="text" onChange={(e:any) => {setPassword(e.currentTarget.value)}}/>
        </div>
        <div>
            <span>Repeat password:</span>
            <input type="text" />
        </div>
        <span className={s.sp}>{error}</span>

        {isloading &&
            <span><img src={loading} alt=""/></span>
        }

        <button onClick={() => {dispatch(sendRegistrationRequest(email, password))}} disabled={isloading}>Register</button>
        <NavLink to='/login'>Sign in</NavLink>
    </div>
  );
};

export default Registration;
