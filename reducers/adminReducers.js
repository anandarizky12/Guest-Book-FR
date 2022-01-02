import {
    ADMIN_LOGIN,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,

    UPDATE_PASSWORD,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL ,

    EDIT_PROFILE,
    EDIT_PROFILE_SUCCESS,
    EDIT_PROFILE_FAIL,
    
    GET_ADMIN ,
    GET_ADMIN_SUCCESS,
    GET_ADMIN_FAIL,
    
    GET_ALL_ADMIN,
    GET_ALL_ADMIN_SUCCESS,
    GET_ALL_ADMIN_FAIL
} from '../actions/actions_type/actions_type_admin';



export const adminLogin = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_LOGIN:
            return {
                isLoading: true,
                isError: false,
                isSuccess: false,
                message: ''
            };
        case ADMIN_LOGIN_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
                message: action.payload,
                data: action.payload
            };
        case ADMIN_LOGIN_FAIL:
            return {
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload.message
            };
        default:
            return state;
    }
};

export const editProfile = (state = {}, action) => {
    switch (action.type) {
        case EDIT_PROFILE:
            return {
                isLoading: true,
                isError: false,
                isSuccess: false,
                message: ''
            };
        case EDIT_PROFILE_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
                message: action.payload,
                data: action.payload
            };
        case EDIT_PROFILE_FAIL:
            return {
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload.message
            };
        default:
            return state;
    }
};


export const getAdmin = (state = {}, action) => {
    switch (action.type) {
        case GET_ADMIN:
            return {
                isLoading: true,
                isError: false,
                isSuccess: false,
                message: ''
            };
        case GET_ADMIN_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
                message: action.payload,
                data: action.payload
            };
        case GET_ADMIN_FAIL:
            return {
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload.message
            };
        default:
            return state;
    }
};


export const getAllAdmin = (state = {}, action) => {
   switch (action.type) {
       case GET_ALL_ADMIN:
              return {
                    isLoading: true,
                    isError: false,
                    isSuccess: false,
                    message: ''
                };
         case GET_ALL_ADMIN_SUCCESS:
                return {
                    isLoading: false,
                    isError: false,
                    isSuccess: true,
                    data: action.payload
                };
         case GET_ALL_ADMIN_FAIL:
                return {
                    isLoading: false,
                    isError: true,
                    isSuccess: false,
                    message: action.payload.message
                };
         default:
                return state;
     }
    };