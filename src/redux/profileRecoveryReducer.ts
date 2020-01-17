const initialState: IState = {
    login: 1
}

const reducerProfileRecovery = (state: IState = initialState, action: IAction): IState => {
    if (actionTypes.hasOwnProperty(action.type)) {
        return actionTypes[action.type](state, action.value)
    } else {
        return state
    }
}


export default reducerProfileRecovery