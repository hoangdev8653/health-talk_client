import {
  createReviewArticle,
  getReviewBySlugArticle,
} from "@/apis/reviewArticle";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createReviewArticleThunk = createAsyncThunk(
  "create/reviewArticle",
  async (data: any, thunkAPI) => {
    try {
      const response = await createReviewArticle(data);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getReviewBySlugArticleThunk = createAsyncThunk(
  "get/reviewArticle",
  async (slug: string, thunkAPI) => {
    try {
      const response = await getReviewBySlugArticle(slug);
      return response.data.content;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
