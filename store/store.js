import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    addGuestReducer,
    getALLGuestsReducers,
    deleteGuestReducer,
    editGuestReducer,
    getGuestReducer,
    getTotalGuestReducer,
    getAllInstanceReducer
} from '../reducers/guestReducers';
import {
    adminLogin,
    editProfile,
    getAdmin,
    getAllAdmin
} from '../reducers/adminReducers';
// import {
//     user, userRegisterReducer, userLoginReducer
// } from './reducers/userReducers';
// import {
//     createQuestionReducer, 
//     editQuestionReducer, 
//     deleteQuestionReducer, 
//     getAllQuestionsReducer, 
//     getMyQuestionsReducer ,
//     voteReducer
// } from './reducers/questionReducers';
// import Alert from './reducers/alertReducers';

const reducers = combineReducers({

    // Add your reducers here
    addGuestReducer,
    allGuests : getALLGuestsReducers,
    auth : adminLogin ,
    deleteGuestReducer,
    editGuestReducer,
    getGuestReducer,
    getTotalGuestReducer,
    editProfile,
    getAdmin,
    getAllAdmin,
    getAllInstanceReducer
});

let adminDataFromStorage;
if (typeof window !== 'undefined'){

      adminDataFromStorage = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth')) 
      : null; 
 
}

const intialState = {
    auth: { adminInfo: adminDataFromStorage }
};



const  middleware = applyMiddleware(thunk);

export default createStore(reducers , intialState, middleware);