import {combineReducers, createStore, applyMiddleware} from "redux";

import reducerProfileRecovery from './passwordRecoveryReducer'

import reducerLogin from './loginReducer'
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({
    login: reducerLogin,
    profile: reducerProfileRecovery,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store