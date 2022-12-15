const intialState = {
  isLoading: null,
  message: null,
  errors: {},
};

const employee = (state = intialState, action) => {
  switch (action.type) {
    case "GET_ALL_MANAGERS_REQUEST":
      return {
        ...state,
        isLoading: true,
        errors: {},
      };
    case "GET_ALL_MANAGERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        errors: {
          getManagersError: false,
        },
        managers: action.payload,
      };
    case "GET_ALL_MANAGERS_FAIL":
      return {
        ...state,
        isLoading: false,
        errors: {
          getManagersError: true,
        },
      };
    case "GET_ALL_ROLES_REQUEST":
      return {
        ...state,
        isLoading: true,
        errors: {},
      };
    case "GET_ALL_ROLES_SUCCESS":
      return {
        ...state,
        roles: action.payload,
      };
    case "GET_ALL_EMPLOYEES_REQUEST":
      return {
        ...state,
        errors: {},
        isLoading: true,
      };
    case "GET_ALL_EMPLOYEES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        employees: action.payload,
      };
    case "ADD_NEW_DEPARTMENT_REQUEST":
      return {
        ...state,
        errors: {},
        message: null,
      };
    case "ADD_NEW_DEPARTMENT_SUCCESS":
      return {
        ...state,
        errors: {
          addDepartmentError: false,
        },
        message: "Department added",
      };
    case "ADD_NEW_DEPARTMENT_FAIL":
      return {
        ...state,
        errors: {
          addDepartmentError: true,
        },
        message: action.payload,
      };
    case "GET_ALL_DEPARTMENT_REQUEST":
      return {
        ...state,
        errors: {},
        message: null,
      };
    case "GET_ALL_DEPARTMENT_SUCCESS":
      return {
        ...state,
        errors: {
          getDepartmentError: false,
        },
        message: "Department fetched",
        departments: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default employee;
