import {
  getAllPostcardThunk,
  createPostcardThunk,
  deletePostcardThunk,
} from "@/stores/thunks/postcard";
import { createSlice } from "@reduxjs/toolkit";

interface PostcardState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: PostcardState = {
  data: [],
  loading: false,
  error: null,
};

const postcardSlice = createSlice({
  name: "postcard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPostcardThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPostcardThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllPostcardThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createPostcardThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPostcardThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createPostcardThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deletePostcardThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePostcardThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deletePostcardThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = postcardSlice.actions;
export default postcardSlice.reducer;
