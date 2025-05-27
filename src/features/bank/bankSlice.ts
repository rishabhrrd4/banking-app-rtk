import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: "",
  balance: 0,
};

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    deposit: (state) => {
      state.balance += Number(state.amount);
      state.amount = "";
    },
    withdraw: (state) => {
      const amt = state.amount;
      if (Number(amt) > state.balance) {
        alert("Insufficient balance");
        return;
      }
      state.balance -= Number(state.amount);
      state.amount = "";
    },
  },
});

export const { setAmount, deposit, withdraw } = bankSlice.actions;
export default bankSlice.reducer;
