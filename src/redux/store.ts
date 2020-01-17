import {combineReducers, createStore, applyMiddleware} from "redux";
import reducerLogin from './loginReducer'
import reducerRegistration from './registrationReducer'
import reducerPasswordRecovery from './passwordRecoveryReducer'
import reducerProfileRecovery from './profileRecoveryReducer'
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({
    login: reducerLogin,
    registration: reducerRegistration,
    password: reducerPasswordRecovery,
    profile: reducerProfileRecovery
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;