import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface InitialStateProps {
  count: number;
}

const initialState: InitialStateProps = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});
export const SelectCounter = (state: RootState) => state.counter;
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
