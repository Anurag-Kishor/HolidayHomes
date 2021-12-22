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
    // const responseTest = await fetch("/api/user");
    // const resDataTest = await responseTest.json();
    // console.log(resDataTest);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const resData = await response.json();
    if (resData.accessToken) {
      const userTokensEmailId = {
        email: user.email,
        accessToken: resData.accessToken,
        refreshToken: resData.refreshToken,
        userId: resData.user_id,
      };
      await dispatch({
        type: LOGIN,
        user: userTokensEmailId,
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

export const getUserDetails = (userId, userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch("/api/user");
    const resData = await response.json();
    console.log(resData.data);
    return resData.data;
  };
};

export const becomeAHost = (userId, userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + userAccessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userId),
    });

    const resData = await response.json();

    if (resData.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: resData.error };
    }
  };
};
