export const initalState = {
  user: null,
  token: null,
  loading: true,
  error: null,
};

export const actionType = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGOUT: "LOGOUT",
};

export function reducer(state, action) {
  switch (action.type) {
    case actionType.LOGIN_REQUEST:
      return {
        user: null,
        token: null,
        loading: true,
        error: null,
      };

    case actionType.LOGIN_SUCCESS:
      const { user, token } = action.payload;
      return {
        user: user,
        token: token,
        loading: false,
        error: null,
      };

    case actionType.LOGIN_ERROR:
      return {
        user: null,
        token: null,
        loading: false,
        error: action.type.error,
      };

    case actionType.LOGOUT:
      return {
        user: null,
        token: null,
        loading: false,
        error: null,
      };
    default:
      throw Error(`action type not allowed: ${action.type}`);
  }
}
