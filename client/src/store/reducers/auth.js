const intialState = {
  isLoading: null,
  error: {},
  message: "null",
};

const auth = (state = intialState, action) => {
  switch (action.type) {
    case "LOGIN_EMPLOYEE_REQUEST":
      return {
        ...state,
        isLoading: true,
        message: null,
        error: {},
      };
    case "LOGIN_EMPLOYEE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: {
          loginError: false,
        },
        message: "Login Successfully",
        userInfo: action.payload,
      };
    case "LOGIN_EMPLOYEE_FAIL":
      return {
        ...state,
        isLoading: false,
        error: {
          loginError: true,
        },
        message: action.payload,
      };
    case "IS_LOGGEDIN_SUCCESS":
      return {
        ...state,
        userInfo: action.payload,
      };
    case "CREATE_EMPLOYEE_REQUEST":
      return {
        ...state,
        error: {},
        isLoading: true,
        message: null,
      };
    case "CREATE_EMPLOYEE_SUCCESS":
      return {
        ...state,
        error: {
          createEmployeeError: false,
        },
        message: "Employee created successfully",
      };
    case "CREATE_EMPLOYEE_FAIL":
      return {
        ...state,
        error: {
          createEmployeeError: true,
        },
        message: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default auth;
