export const FETCH_AMENITIES = "AMENITIES";
export const FETCH_RENTAL_TYPES = "FETCH_RENTAL_TYPES";
export const ADD_RENTAL = "ADD_RENTAL";
export const fetchAmenities = (userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch("/api/rental/info/service", {
      headers: {
        Authorization: "Bearer " + userAccessToken,
      },
    });
    const resData = await response.json();

    await dispatch({
      type: FETCH_AMENITIES,
      amenities: resData.data,
    });

    return resData.data;
  };
};

export const fetchRentalTypes = (userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch("/api/rental/info/rentalType", {
      headers: {
        Authorization: "Bearer " + userAccessToken,
      },
    });
    const resData = await response.json();

    await dispatch({
      type: FETCH_RENTAL_TYPES,
      rentalTypes: resData.data,
    });

    return resData.data;
  };
};

export const fetchAddresses = (userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch("/api/home/location", {
      headers: {
        Authorization: "Bearer " + userAccessToken,
      },
    });
    const resData = await response.json();

    // await dispatch({
    //   type: FETCH_ADDRESSES,
    //   addresses: resData.data,
    // });
    return resData.data;
  };
};

export const addRental = (addRentalObj, userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch("/api/rental", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + userAccessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addRentalObj),
    });

    const resData = await response.json();

    if (resData.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: resData.error };
    }
  };
};

export const getRentals = (userId, userAccessToken) => {
  return async (dispatch) => {
    const response = await fetch(`/api/rental/info/booking/rentals/${userId}`, {
      headers: {
        Authorization: "Bearer " + userAccessToken,
      },
    });
    const resData = await response.json();

    await resData.data.forEach(async (element, index) => {
      const singleResponse = await fetch(
        `/api/booking/rental/${element.rental_id}`,
        {
          headers: {
            Authorization: "Bearer " + userAccessToken,
          },
        }
      );
      const singleResData = await singleResponse.json();
      element["bookings"] = singleResData.data;
    });

    return resData.data;
  };
};
