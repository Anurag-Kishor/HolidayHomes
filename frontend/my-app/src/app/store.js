import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "./Reducers/userReducer";
import hostReducer from "./Reducers/hostReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    host: hostReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
