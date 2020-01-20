import {combineReducers, createStore, applyMiddleware} from "redux";
import reducerProfileRecovery from './passwordRecoveryReducer'
import reducerRegistration from './registrationReducer'
import reducerLogin from './loginReducer'
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({
    login: reducerLogin,
    registration: reducerRegistration,
    profile: reducerProfileRecovery,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store