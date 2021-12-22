import { LOGIN, LOGOUT, BECOME_HOST } from "../Actions/userActions";

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
    case BECOME_HOST: {
      const userNew = { ...state.user };
      userNew["userRole"] = "host";
      return {
        ...state,
        user: userNew,
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
