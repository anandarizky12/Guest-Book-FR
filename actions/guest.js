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
} from "./actions_type/actions_type_guest";
import axios from "axios";
import Swal from "sweetalert2";

export const addGuest = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_GUEST });

    dispatch({ type: ADD_GUEST_SUCCESS, payload: data });
  } catch (error) {
    Swal.fire("Error!", `${error}`, "error");
    dispatch({ type: ADD_GUEST_FAIL, payload: error.data });
  }
};
export const editGuest = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: EDIT_GUEST });

    dispatch({ type: EDIT_GUEST_SUCCESS, payload: data });
  } catch (error) {
    Swal.fire("Error!", `${error}`, "error");
    dispatch({ type: EDIT_GUEST_FAIL, payload: error.data });
  }
};

export const getAllGuests = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ALL_GUESTS });

    const {
      auth: { adminInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + adminInfo.token,
      },
    };

    const response = await axios.get("/api/getallguests", config);
    dispatch({ type: GET_ALL_GUESTS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    Swal.fire("Error!", `${error}`, "error");
    dispatch({ type: GET_ALL_GUESTS_FAIL, error: error.message });
  }
};

export const getAllInstace = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ALL_INSTANCE });

    const res = await axios.get("/api/instance");

    dispatch({ type: GET_ALL_INSTANCE_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    Swal.fire("Error!", `${error}`, "error");
    dispatch({ type: GET_ALL_INSTANCE_FAIL, error: error.message });
  }
};

export const getGuest = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_GUEST });
    console.log(id);
    const {
      auth: { adminInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + adminInfo.token,
      },
    };
    const response = await axios.get(`/api/getguest/${id}`, config);

    dispatch({ type: GET_GUEST_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    // Swal.fire("Error!", `${error}`, "error");
    dispatch({ type: GET_GUEST_FAIL, payload: error.message });
  }
};

export const getTotalGuest = (year) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_TOTAL_GUEST });

    const {
      auth: { adminInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + adminInfo.token,
      },
    };

    const response = await axios.post("/api/gettotalguests", year, config);

    dispatch({ type: GET_TOTAL_GUEST_SUCCESS, payload: response });
  } catch (error) {
    console.log(error);
    Swal.fire("Error!", `${error}`, "error");
    dispatch({ type: GET_TOTAL_GUEST_FAIL, payload: error.response });
  }
};

export const deleteGuest = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_GUEST });

    const {
      auth: { adminInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + adminInfo.token,
      },
    };
    const response = await axios.delete(`/api/deleteguest/${id}`, config);

    dispatch({ type: DELETE_GUEST_SUCCESS, payload: response.data });
    dispatch(getAllGuests()).then((result) => {
      Swal.fire("Dihapus!", "Data Sudah Dihapus.", "success");
    });

    //   window.location.reload()
  } catch (error) {
    dispatch({ type: DELETE_GUEST_FAIL, payload: error.response.data });
    Swal.fire("Gagal!", `${error.response.data.message}`, "error");
  }
};
