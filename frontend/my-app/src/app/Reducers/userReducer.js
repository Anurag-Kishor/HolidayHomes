import { LOGIN, LOGOUT } from "../Actions/userActions";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.user,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;
