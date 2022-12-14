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
    default:
      return {
        ...state,
      };
  }
};

export default auth;
