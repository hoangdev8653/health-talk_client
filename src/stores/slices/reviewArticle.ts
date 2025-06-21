import {
  createReviewArticleThunk,
  getReviewBySlugArticleThunk,
} from "@/stores/thunks/reviewArticle";
import { createSlice } from "@reduxjs/toolkit";

interface ReviewArticleState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ReviewArticleState = {
  data: [],
  loading: false,
  error: null,
};

const reviewArticleSlice = createSlice({
  name: "reviewArticle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReviewArticleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReviewArticleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, action.payload.data.content];
      })
      .addCase(createReviewArticleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getReviewBySlugArticleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getReviewBySlugArticleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getReviewBySlugArticleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = reviewArticleSlice.actions;
export default reviewArticleSlice.reducer;
