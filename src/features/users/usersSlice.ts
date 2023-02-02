import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface UserProps {
  id: string;
  name: string;
}

const initialState: Array<UserProps> = [
  { id: "0", name: "Bartek Płacz" },
  { id: "1", name: "Miłosz Kox" },
  { id: "2", name: "Kacper Potęg" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
