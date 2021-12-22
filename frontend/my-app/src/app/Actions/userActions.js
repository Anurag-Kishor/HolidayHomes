export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const BECOME_HOST = "BECOME_HOST";

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
        userRole: resData.role,
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
    const response = await fetch(`/api/user/${userId}`, {
      headers: {
        Authorization: "Bearer " + userAccessToken,
        "Content-Type": "application/json",
      },
    });
    const resData = await response.json();

    return resData.data;
  };
};

export const getUserBookings = (userId, userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch(`/api/booking/${userId}`, {
      headers: {
        Authorization: "Bearer " + userAccessToken,
        "Content-Type": "application/json",
      },
    });
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

export const updateProfileDetails = (userDataObj, userAccessToken, userId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/user/${userId}`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + userAccessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDataObj),
    });

    const resData = await response.json();

    if (resData.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: resData.error };
    }
  };
};

export const makeUserHost = (userId, userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch(`/api/user/host/${userId}`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + userAccessToken,
      },
    });

    const resData = await response.json();
    if (resData.status === 200) {
      await dispatch({
        type: BECOME_HOST,
      });
      return { success: true };
    } else {
      return { success: false, error: resData.error };
    }
  };
};
