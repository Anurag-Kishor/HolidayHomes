import { FETCH_AMENITIES, FETCH_RENTAL_TYPES } from "../Actions/hostActions";

const initialState = {
  amenities: [],
  rentalTypes: [],
};

const hostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AMENITIES: {
      Object.assign(state.amenities, []);
      return {
        ...state,
        amenities: action.amenities,
      };
    }
    case FETCH_RENTAL_TYPES: {
      Object.assign(state.rentalTypes, []);
      return {
        ...state,
        rentalTypes: action.rentalTypes,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default hostReducer;
