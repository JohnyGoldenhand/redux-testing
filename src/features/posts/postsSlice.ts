import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface PostProps {
  id: string;
  title: string;
  content: string;
}

const initialState: Array<PostProps> = [
  { id: "1", title: "Learning Redux Toolkit", content: "Nice Things" },
  { id: "2", title: "Slices", content: "Pizza" },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action: PayloadAction<PostProps>) => {
        state.push(action.payload);
      },

      prepare: (title, content) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const SelectPosts = (state: RootState) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
