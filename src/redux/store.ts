import {combineReducers, createStore, applyMiddleware} from "redux";

import reducerProfileRecovery from './passwordRecoveryReducer'

import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({
    profile: reducerProfileRecovery
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store