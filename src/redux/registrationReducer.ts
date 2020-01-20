import {apiRegistration} from '../apiRegistration/apiRegistration';

const ERROR_REGISTRATION_DATA = 'ERROR_REGISTRATION_DATA';
const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
const AUTH_SUCCESS = 'AUTH_SUCCESS';


const initialState = {
    error: '',
    isLoading: false,
    success: false
};

const reducerRegistration = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case ERROR_REGISTRATION_DATA:
            return {
                ...state,
                error: action.error
            };
        case REGISTRATION_REQUEST:
            return {
                ...state,
                isLoading: !state.isLoading
            };
        case AUTH_SUCCESS:
        return {
            ...state,
            success: action.success
        }
}
return state;
};

export const errorRegistrationData = (error: any) => {
    return {
        type: ERROR_REGISTRATION_DATA,
        error
    }
};

const isRegistrationRequestSend = () => {
    return {
        type: REGISTRATION_REQUEST
    }
};

const isAuthSuccess = (success: boolean) => {
    return {
        type: AUTH_SUCCESS,
        success
    }
};


export const sendRegistrationRequest = (email: string, password: string) => async (dispatch: any) => {
    try {
        dispatch(isRegistrationRequestSend());
        let response = await apiRegistration.sendEmail(email, password);
        console.log(response);
        dispatch(isAuthSuccess(response.data.success));
    } catch (error) {
        dispatch(errorRegistrationData(error.response.data.error))
    }
    dispatch(isRegistrationRequestSend());
};

export default reducerRegistration;