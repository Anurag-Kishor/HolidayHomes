export const FETCH_NEWEST_ADDITIONS = "FETCH_NEWEST_ADDITIONS";
export const FETCH_MOST_BOOKED = "FETCH_MOST_BOOKED";

export const fetchNewestAdditions = (userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch("/api/rental/info/service", {
      headers: {
        Authorization: "Bearer " + userAccessToken,
      },
    });
    const resData = await response.json();

    //   await dispatch({
    //     type: FETCH_AMENITIES,
    //     amenities: resData.data,
    //   });

    return resData.data;
  };
};

export const fetchMostBooked = (userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch("/api/rental/info/service", {
      headers: {
        Authorization: "Bearer " + userAccessToken,
      },
    });
    const resData = await response.json();

    //   await dispatch({
    //     type: FETCH_AMENITIES,
    //     amenities: resData.data,
    //   });

    return resData.data;
  };
};
