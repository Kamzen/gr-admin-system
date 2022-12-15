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
    default:
      return {
        ...state,
      };
  }
};

export default employee;
