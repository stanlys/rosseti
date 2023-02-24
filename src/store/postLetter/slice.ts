import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoadPostLetter, IPostLetter } from "../../interfaces/postLetter";
import { addPostLetter, deletePostLetter, getAllPostLetters } from "./thunk";

const initialState: ILoadPostLetter = {
  isLoading: false,
  error: null,
  postLetters: [],
};

export const PostLetterSlice = createSlice({
  name: "postLetter",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPostLetters.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getAllPostLetters.fulfilled,
        (state, action: PayloadAction<Array<IPostLetter>>) => {
          state.isLoading = false;
          state.postLetters = action.payload;
        }
      )
      .addCase(getAllPostLetters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as string;
      })
      .addCase(addPostLetter.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        addPostLetter.fulfilled,
        (state, action: PayloadAction<IPostLetter>) => {
          state.isLoading = false;
          state.postLetters.push(action.payload);
        }
      )
      .addCase(addPostLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(deletePostLetter.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(
        deletePostLetter.fulfilled,
        (state, action: PayloadAction<IPostLetter>) => {
          state.isLoading = false;
          state.postLetters = state.postLetters.filter(
            (letter) => letter._id !== action.payload._id
          );
        }
      )
      .addCase(deletePostLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default PostLetterSlice.reducer;
