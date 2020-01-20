import {loginApi} from '../api/apiLogin'
import {Dispatch} from "redux";

const ERROR = 'ERROR'
const LOADING = 'LOADING'
const DATA = 'DATA'

interface IState {
    name: string
    token: string
    error: string
    isLoading: boolean
}

interface IActionError {
    type: typeof ERROR | typeof LOADING
    error: string
    isLoading: boolean
}

interface IActionLoading {
    type: typeof LOADING | typeof DATA
    isLoading: boolean
    token: string
    name: string
}

const initialState: IState = {
    error: '',
    isLoading: false,
    token: '',
    name: ''
}

export const reducerLogin = (state: IState = initialState, action: IActionError | IActionLoading): IState => {
    switch (action.type) {
        case ERROR: {
            return {
                ...state, error: action.error
            }
        }
        case LOADING: {
            return {
                ...state, isLoading: !state.isLoading
            }
        }
        case DATA: {
            return {
                ...state, name: action.name, token: action.token
            }
        }
        default: {
            return state
        }
    }
}

export let errorLoginAC = (error: string) => ({type: ERROR, error})
let saveDataAC = (name: string, token: string) => ({type: DATA, name, token})
let isLoginAC = () => ({type: LOADING})

export const putLoginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    try {
        dispatch(isLoginAC())
        let response = await loginApi.putLogin(email, password, rememberMe)
        dispatch(saveDataAC(response.data.name, response.data.token))
    } catch (e) {
        dispatch(errorLoginAC(e.response.data.error))
    }
    dispatch(isLoginAC())
}

export default reducerLogin