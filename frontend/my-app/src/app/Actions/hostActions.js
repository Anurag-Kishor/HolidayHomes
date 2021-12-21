export const FETCH_AMENITIES = "AMENITIES";
export const FETCH_RENTAL_TYPES = "FETCH_RENTAL_TYPES";

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
