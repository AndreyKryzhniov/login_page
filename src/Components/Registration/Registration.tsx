import React, {useEffect, useState} from 'react';
import s from '../Registration/registration.module.css';
import {useDispatch, useSelector} from "react-redux";
import {errorRegistrationData, sendRegistrationRequest} from "../../redux/registrationReducer";
import {NavLink, Redirect} from "react-router-dom";
import loading from "../Registration/svgImages/loading.svg";


const Registration: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector((store: any) => store.registration.error);
    const isloading = useSelector((store: any) => store.registration.isLoading);
    const success = useSelector((store: any) => store.registration.success);
    useEffect(() => {
    }, [error]);
    useEffect(() => {
    }, [isloading]);

    const onSetEmail = (e: any) => {
        setEmail(e.currentTarget.value);
        dispatch(errorRegistrationData(``));
    };
    const onSetPassword = (e: any) => {
        setPassword(e.currentTarget.value);
        dispatch(errorRegistrationData(``));
    };
    const onSetRepeatPassword = (e: any) => {
        setRepeatPassword(e.currentTarget.value);
        dispatch(errorRegistrationData(``));
    };
    const validate = (email: string) => {
        const expression =  /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,7}$/i; //  /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase())
    };

    const onRegisterClick = () => {
        if(repeatPassword !== password) {
            dispatch(errorRegistrationData(`Passwords don't match`))
        }else if (password.length <= 7){
            dispatch(errorRegistrationData(`Password must contain minimum 7 symbols`))
        }else if(!validate(email)) {
            dispatch(errorRegistrationData(`Email is not valid`))
        }
        else{
            dispatch(sendRegistrationRequest(email, password))
        }
    };

    if(success) return <Redirect to="/login"/>;

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
