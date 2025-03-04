import {
  createArticleThunk,
  getAllArticleThunk,
  getArticlesByCategoryThunk,
  getArticleByIdThunk,
  getArticleBySlugThunk,
  getAllArticleBySlugCategoryThunk,
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
      })
      .addCase(getArticlesByCategoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getArticlesByCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getArticlesByCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getArticleByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getArticleByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getArticleByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getArticleBySlugThunk.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getArticleBySlugThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getArticleBySlugThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllArticleBySlugCategoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllArticleBySlugCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllArticleBySlugCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = articleSlice.actions;
export default articleSlice.reducer;
