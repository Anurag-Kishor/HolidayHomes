export const FETCH_NEWEST_ADDITIONS = "FETCH_NEWEST_ADDITIONS";
export const FETCH_MOST_BOOKED = "FETCH_MOST_BOOKED";

export const fetchNewestAdditions = (userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch("/api/home/mostRecent", {
      headers: {
        Authorization: "Bearer " + userAccessToken,
      },
    });
    const resData = await response.json();

    //   await dispatch({
    //     type: FETCH_AMENITIES,
    //     amenities: resData.data,
    //   });

    // await resData.data.forEach(async (rental) => {
    //   const response = await fetch(
    //     `/api/rental/${rental.rental_id}/avgReview`,
    //     {
    //       headers: {
    //         Authorization: "Bearer " + userAccessToken,
    //       },
    //     }
    //   );
    //   const getVal = await response.json();
    //   rental["avg"] = await getVal.data.avg;
    //   rental["count"] = await getVal.data.count;
    // });
    // // console.log(resData.data);
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

    // resData.data.map(async (rental) => {
    //   const getVal = await fetchAvgAndCountReviews(
    //     rental.rental_id,
    //     userAccessToken
    //   );
    //   rental["avg"] = getVal.avg;
    //   rental["count"] = getVal.count;
    //   return rental;
    // });
    // console.log(resData.data);
    return resData.data;
  };
};

export const fetchAvgAndCountReviews = (rentalId, userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch(`/api/rental/${rentalId}/avgReview`, {
      headers: {
        Authorization: "Bearer " + userAccessToken,
      },
    });
    const resData = await response.json();
    return resData.data;
  };
};

export const fetchRentalInfo = (rentalId, userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch(`/api/rental/info/${rentalId}/`, {
      headers: {
        Authorization: "Bearer " + userAccessToken,
      },
    });
    const resData = await response.json();

    const responseRating = await fetch(`/api/rental/${rentalId}/avgReview`, {
      headers: {
        Authorization: "Bearer " + userAccessToken,
      },
    });
    const getVal = await responseRating.json();

    resData.data["avg"] = getVal.data.avg;
    resData.data["count"] = getVal.data.count;
    return resData.data;
  };
};

export const checkForAvailability = (datesRentalIdObj, userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch(`/api/booking/availability`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + userAccessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datesRentalIdObj),
    });
    const resData = await response.json();
    return resData.data;
  };
};

export const addBookingAction = (bookingObj, userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + userAccessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingObj),
    });

    const resData = await response.json();

    console.log(resData);
    if (resData.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: resData.error };
    }
  };
};
