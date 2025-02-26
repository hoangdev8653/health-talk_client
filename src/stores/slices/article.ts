import {
  createArticleThunk,
  getAllArticleThunk,
} from "@/stores/thunks/article";
import { createSlice } from "@reduxjs/toolkit";

interface ArticleState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ArticleState = {
  data: null,
  loading: false,
  error: null,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllArticleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllArticleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createArticleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createArticleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createArticleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = articleSlice.actions;
export default articleSlice.reducer;
