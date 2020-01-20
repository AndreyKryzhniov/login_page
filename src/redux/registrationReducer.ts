import {apiRegistration} from '../apiRegistration/apiRegistration';

const ERROR_REGISTRATION_DATA = 'ERROR_REGISTRATION_DATA';
const IS_REGISTRATION_REQUEST_TRUE = 'IS_REGISTRATION_REQUEST_TRUE';
const IS_REGISTRATION_REQUEST_FALSE = 'IS_REGISTRATION_REQUEST_FALSE';


const initialState = {
    error: '',
    isLoading: false
};

const reducerRegistration = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case ERROR_REGISTRATION_DATA:
            return {
                ...state,
                error: action.error
            };
        case IS_REGISTRATION_REQUEST_TRUE:
        return {
            ...state,
            isLoading: true
        };
        case IS_REGISTRATION_REQUEST_FALSE:
        return {
            ...state,
            isLoading: false
        }
    }
    return state;
};

const errorRegistrationData = (error: any) => {
    return {
        type: ERROR_REGISTRATION_DATA,
        error
    }
};

const isRegistrationRequestTrue = () => {
    return {
    type: IS_REGISTRATION_REQUEST_TRUE
    }
};

const isRegistrationRequestFalse = () => {
    return {
    type: IS_REGISTRATION_REQUEST_FALSE
    }
};



export const sendRegistrationRequest = (email:any, password: any) => async (dispatch: any) => {
    try {
        dispatch(isRegistrationRequestTrue());
        let response = await apiRegistration.sendEmail(email, password);
    }
    catch(error) {
        dispatch(errorRegistrationData(error.response.data.error))
    }
    dispatch(isRegistrationRequestFalse());
};

export default reducerRegistration;