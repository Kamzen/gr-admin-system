import axiosInstance from "../../xhr";

export const getAllManagers = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_MANAGERS_REQUEST" });

    const { data } = await axiosInstance.get(`/employees/getAllManagers`);
    console.log(data);
    dispatch({ type: "GET_ALL_MANAGERS_SUCCESS", payload: data.managers });
  } catch (err) {
    console.log(err);
  }
};

export const getAllRoles = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_ROLES_REQUEST" });

    const { data } = await axiosInstance.get(`/employees/roles`);
    console.log(data);
    dispatch({ type: "GET_ALL_ROLES_SUCCESS", payload: data.roles });
  } catch (err) {
    console.log(err);
  }
};
