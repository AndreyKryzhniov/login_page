import {loginApi} from '../api/apiLogin'
import {Dispatch} from "redux";

const ERROR = 'ERROR'

export interface IState {
    error: string
}

    interface IAction {
    type: typeof ERROR
    error: string
}


const initialState: IState = {
    error: ''
}

export const reducerLogin = (state: IState = initialState, action: IAction): IState => {
    switch (action.type) {
        case ERROR: {
            return {
                ...state, error: action.error
            }
        }
        default: {
            return state
        }
    }
}

let errorLoginAC = (error: string) => ({type: ERROR, error})

export const putLoginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    try {
        await loginApi.putLogin(email, password, rememberMe)
    } catch (e) {
        dispatch(errorLoginAC(e.response.data.error))
    }
}

export default reducerLogin