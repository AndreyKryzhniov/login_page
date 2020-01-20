import {loginApi} from '../api/apiLogin'
import {Dispatch} from "redux";



const LOGIN = 'LOGIN'

interface IState {
    email: string,
    password: string,
    rememberMe: boolean
}

interface IAction {
    type: typeof LOGIN
    email: string
    password: string
    rememberMe: boolean
}

const initialState: IState = {
    email: '',
    password: '',
    rememberMe: false
}

export const reducerLogin = (state: IState = initialState, action: IAction): IState => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state, email: action.email, password: action.password, rememberMe: action.rememberMe
            }
        }
        default: {
            return state
        }
    }
}

let putValueAC = (email: string, password: string, rememberMe: boolean) => ({type: LOGIN, email, password, rememberMe})

export const putLoginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    let response = await loginApi.putLogin(email, password, rememberMe)
    dispatch(putValueAC(response.data.email, response.data.password, response.data.rememberMe))
}

export default reducerLogin