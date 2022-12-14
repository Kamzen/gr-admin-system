import axios from "axios";
import axiosInstance from "../../xhr";

const BASE_API_URL = `http://localhost:5000/api/dev`;

export const loginEmployee = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_EMPLOYEE_REQUEST" });

    const { data } = await axios.post(`${BASE_API_URL}/auth/login`, formData);

    localStorage.setItem("userInfo", JSON.stringify(data.employee));

    dispatch({ type: "LOGIN_EMPLOYEE_SUCCESS", payload: data.employee });

    console.log(data);
  } catch (err) {
    console.log(err);
    dispatch({
      type: "LOGIN_EMPLOYEE_FAIL",
      payload: err.response.data.message || "Server Error",
    });
  }
};

export const isLoggedIn = () => async dispatch => {
    try {
    
        const { data } = await axiosInstance.get(`${BASE_API_URL}/auth/isLoggedIn`,);
    
        localStorage.setItem("userInfo", JSON.stringify(data.employee));
    
        dispatch({ type: "IS_LOGGEDIN_SUCCESS", payload: data.employee });
    
        console.log(data);
      } catch (err) {
        console.log(err);
      }
}
