import {
  createArticleThunk,
  getAllArticleThunk,
  getArticlesByCategoryThunk,
  getArticleByIdThunk,
  getArticleBySlugThunk,
  getAllArticleBySlugCategoryThunk,
  getArticlesByUserThunk,
} from "@/stores/thunks/article";
import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage } from "@/lib/localStorage";

interface ArticleState {
  data: any;
  allArticles: any;
  articleDetail: any;
  loading: boolean;
  error: string | null;
  comment: any[];
  likes: number;
}

const initialState: ArticleState = {
  data: null,
  allArticles: [],
  articleDetail: null,
  loading: false,
  error: null,
  comment: [],
  likes: 0,
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
        state.allArticles = action.payload;
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
        state.articleDetail = action.payload.data.content;
        state.comment = action.payload.data.comment;
        state.likes = action.payload.data.like.length;
        setLocalStorage("totalLikes", action.payload.data.like.length);
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
      })
      .addCase(getArticlesByUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getArticlesByUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getArticlesByUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as string;
      });
  },
});

export const {} = articleSlice.actions;
export default articleSlice.reducer;
