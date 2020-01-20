import React, {useEffect, /*useState*/} from 'react';
import s from './Login.module.css';
// import {NavLink} from "react-router-dom";
// import {errorLoginAC, putLoginTC} from '../redux/loginReducer'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
// import loading from '../Components/Registration/svgImages/loading.svg'
import {postProfileTC} from "../../redux/profileReducer";
import {Redirect} from "react-router";

const Profile: React.FC = () => {

    // let [email, setLoginState] = useState('')
    // let [password, setPasswordState] = useState('')
    // let [rememberMe, setValueState] = useState(false)
    let error = useSelector((store: AppStateType) => store.profile.error);
    let isAuth = useSelector((store: AppStateType) => store.profile.isLoading);
    let name = useSelector((store: AppStateType) => store.profile.name);
    let token = useSelector((store: AppStateType) => store.login.token);
    // let token = useSelector((store: AppStateType) => store.login.token)
    // let [tokenValue, setToken] = useState(token)

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(() => postProfileTC(token))
    }, [token])


    return (
        <div>
            {
                isAuth && <span>{error}</span>
            }
            <span>{name}</span>
        </div>
    );
}

export default Profile
