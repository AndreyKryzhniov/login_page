
const ADD_LOGIN = 'ADD_LOGIN'
const ADD_PASSWORD = 'ADD_PASSWORD'

interface IState {
    value: string
}

interface IAction {
    type: typeof ADD_LOGIN | typeof ADD_PASSWORD
}

const initialState = {
    value: ''
}

export const reducerPasswordRecovery = (state = initialState, action: IAction): IState => {
    return state
}

export const sendRecoveryPasswordRequest = (email: any) =>{
    
}

export default reducerPasswordRecovery