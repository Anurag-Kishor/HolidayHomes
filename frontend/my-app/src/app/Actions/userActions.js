export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const signupUser = (user) => {
  return async (dispatch) => {
    //GET REQUEST
    // const response = await fetch("/api/user");
    // const resData = await response.json();
    // console.log(resData);
    //console.log(user);

    //POST REQUEST
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const resData = await response.json();
    return resData;
  };
};

export const loginUser = (user) => {
  return async (dispatch) => {
    //Test
    const responseTest = await fetch("/api/user");
    const resDataTest = await responseTest.json();
    console.log(resDataTest);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const resData = await response.json();
    console.log(resData);
    if (resData.success === true && resData.status === 200) {
      const userTokensEmail = {
        email: user.email,
        accessToken: resData.tokens.accessToken,
        refreshToken: resData.tokens.refreshToken,
      };
      await dispatch({
        type: LOGIN,
        user: userTokensEmail,
      });
      return { success: true };
    } else {
      return { success: false, error: resData.error };
    }
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};
