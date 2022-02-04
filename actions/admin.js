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

} from './actions_type/actions_type_admin';
import axios from 'axios';
import Swal from 'sweetalert2';
import { server } from '../components/utils/link';
export const adminLogin = (admin) => async (dispatch) => {
   try{
    dispatch({type: ADMIN_LOGIN});

    dispatch({type: ADMIN_LOGIN_SUCCESS, payload: admin});

    localStorage.setItem('auth', JSON.stringify(admin));

    window.location.replace(`${server}/admin/addguest`);
   }catch(error){
    dispatch({type: ADMIN_LOGIN_FAIL, payload: error});
   }
};


export const updatePaswword = (id, data) => async (dispatch , getState ) => {
        try{
            dispatch({type: UPDATE_PASSWORD});

            const {
                auth : {adminInfo}
            } = getState();

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + adminInfo.token
                }
                };
            const response = await axios.post(`/api/changepassword/${id}`, data, config);

            dispatch({type: UPDATE_PASSWORD_SUCCESS, payload: response.data});

            localStorage.removeItem('auth');

        }
        catch(error){
            dispatch({type: UPDATE_PASSWORD_FAIL, payload: error});
        }
};

export const editProfile = (id, data) => async (dispatch, getState) => {
    console.log(data);
    try{
        dispatch({type: EDIT_PROFILE});
        Swal.fire({
            title: 'Mohon Tunggu!',
            html: 'Proses . . .   ',// add html attribute if you want or remove
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading()
            },
        });
        const {
            auth : {adminInfo}
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + adminInfo.token
            }
        };
        const response = await axios.put(`/api/editadmin/${id}`, data, config);

        dispatch({type: EDIT_PROFILE_SUCCESS, payload: response.data}).then(
            Swal.fire(
                'Berhasil!',
                'Data Berhasil Diubah',
                'success'
              ).then((result) => {
                  if(result.isConfirmed) dispatch(getAdmin(id))})
        )
       
    }catch(error){
        dispatch({type: EDIT_PROFILE_FAIL, payload: error});
    }
};

export const getAllAdmin = () => async (dispatch, getState) => {
    try{
        dispatch({type: GET_ALL_ADMIN});
        
        const {
            auth : {adminInfo}
        }   = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + adminInfo.token
            }
        };
        const response = await axios.get(`/api/getalladmin`, config);

        dispatch({type: GET_ALL_ADMIN_SUCCESS, payload: response.data});

    }catch(error){
        dispatch({type: GET_ALL_ADMIN_FAIL, payload: error});
    }
};

export const getAdmin = (id) => async (dispatch, getState) => {
    try{
        dispatch({type: GET_ADMIN});

        const {
            auth : {adminInfo}
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + adminInfo.token
            }
        };
        const response = await axios.get(`/api/getadmin/${id}`, config);
        dispatch({type: GET_ADMIN_SUCCESS, payload: response.data.adminData});
        

    }catch(err){
        dispatch({type: GET_ADMIN_FAIL, payload: err});
    }
}