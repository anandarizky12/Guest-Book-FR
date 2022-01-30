import {
    ADD_GUEST,
    ADD_GUEST_SUCCESS,
    ADD_GUEST_FAIL,

    EDIT_GUEST_SUCCESS,
    EDIT_GUEST_FAIL,
    EDIT_GUEST,

    DELETE_GUEST,
    DELETE_GUEST_SUCCESS,
    DELETE_GUEST_FAIL,

    GET_ALL_GUESTS,
    GET_ALL_GUESTS_SUCCESS,
    GET_ALL_GUESTS_FAIL,
   
    GET_ALL_INSTANCE,
    GET_ALL_INSTANCE_SUCCESS,
    GET_ALL_INSTANCE_FAIL,
   
    GET_GUEST,
    GET_GUEST_SUCCESS,
    GET_GUEST_FAIL,

    GET_TOTAL_GUEST,
    GET_TOTAL_GUEST_SUCCESS,
    GET_TOTAL_GUEST_FAIL,


} from '../actions/actions_type/actions_type_guest';



export const addGuestReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_GUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_GUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                guest: action.payload,
            };
        case ADD_GUEST_FAIL:
            return {
                ...state,
                loading: false,
                guest: action.payload,
            };
        default:
            return state;
    }
};


export const getALLGuestsReducers = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_GUESTS:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_GUESTS_SUCCESS:
            return {
                ...state,
                loading: false,
                guest: action.payload,
            };
        case GET_ALL_GUESTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};


export const getGuestReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_GUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_GUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                guest: action.payload,
            };
        case GET_GUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;

    }};


export const editGuestReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_GUEST:
            return {
                ...state,
                loading: true,
            };
        case EDIT_GUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                guest: action.payload,
            };
        case EDIT_GUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const deleteGuestReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_GUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_GUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                guest: action.payload,
            };
        case DELETE_GUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getTotalGuestReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TOTAL_GUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_TOTAL_GUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                guest: action.payload.data,
            };
        case GET_TOTAL_GUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}


export const getAllInstanceReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_INSTANCE:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_INSTANCE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case GET_ALL_INSTANCE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
