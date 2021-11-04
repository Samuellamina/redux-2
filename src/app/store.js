import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/customerSlice";
import reservationReducer from "../features/reservationSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    customers: customerReducer,
  },
});
