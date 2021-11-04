import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    transferReservation: (state, action) => {
      state.value.push(action.payload);
    },

    addCustomerFood: (state, action) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { transferReservation, addCustomerFood } = customerSlice.actions;
export default customerSlice.reducer;
