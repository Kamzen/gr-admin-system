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

export const getAllEmployees = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_EMPLOYEES_REQUEST" });

    const { data } = await axiosInstance.get(`/employees/getAllEmployees`);
    console.log(data);
    dispatch({ type: "GET_ALL_EMPLOYEES_SUCCESS", payload: data.employees });
  } catch (err) {
    console.log(err);
  }
};

export const addDepartment = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_NEW_DEPARTMENT_REQUEST" });

    const { data } = await axiosInstance.post(
      `/employees/addDepartment`,
      formData
    );
    dispatch(getAllDepartments())
    console.log(data);
    dispatch({ type: "ADD_NEW_DEPARTMENT_SUCCESS" });
  } catch (err) {
    console.log(err);
  }
};

export const getAllDepartments = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_DEPARTMENT_REQUEST" });

    const { data } = await axiosInstance.get(`/employees/getAllDepartments`);
    console.log(data);
    dispatch({ type: "GET_ALL_DEPARTMENT_SUCCESS", payload: data.departments });
  } catch (err) {
    console.log(err);
  }
};
