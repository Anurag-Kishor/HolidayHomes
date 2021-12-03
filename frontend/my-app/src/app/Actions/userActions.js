export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginUser = (user) => {
  return async (dispatch) => {
    // const response = await fetch("/testAPI");
    // const resData = await response.json();
    // console.log(resData);
    dispatch({
      type: LOGIN,
      user: user,
    });
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};
