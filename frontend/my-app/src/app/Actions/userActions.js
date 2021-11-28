export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginUser = (user) => {
  return {
    type: LOGIN,
    user: user,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};
