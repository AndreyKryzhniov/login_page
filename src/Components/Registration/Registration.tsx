import React, {useEffect, useState} from 'react';
import s from '../Registration/registration.module.css';
import {useDispatch, useSelector} from "react-redux";
import {sendRegistrationRequest} from "../../redux/registrationReducer";
import {NavLink} from "react-router-dom";
import loading from "../Registration/svgImages/loading.svg";


const Registration: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const dispatch = useDispatch();
    let error = useSelector((store: any) => store.registration.error);
    const isloading = useSelector((store: any) => store.registration.isLoading);
    useEffect(() => {
    }, [error]);
    useEffect(() => {
    }, [isloading]);

    const onSetEmail = (e: any) => {
        setEmail(e.currentTarget.value)
    };
    const onSetPassword = (e: any) => {
        setPassword(e.currentTarget.value)
    };
    const onSetRepeatPassword = (e: any) => {
        setRepeatPassword(e.currentTarget.value)
    };
    const onRegisterClick = () => {
        if(repeatPassword === password) {
            dispatch(sendRegistrationRequest(email, password))
        }
    };

    return (
        <div className={s.registration}>
            <span>Register</span>
            <div>
                <span>Email:</span>
                <input type="text" onChange={onSetEmail}/>
            </div>
            <div>
                <span>Password:</span>
                <input type="password" onChange={onSetPassword}/>
            </div>
            <div>
                <span>Repeat password:</span>
                <input type="password" onChange={onSetRepeatPassword}/>
            </div>
            <span className={s.sp}>{error}</span>
            {isloading &&
            <span><img src={loading} alt=""/></span>
            }
            <button onClick={onRegisterClick} disabled={isloading}>Register</button>
            <NavLink to='/login'>Sign in</NavLink>
        </div>
    );
};

export default Registration;
