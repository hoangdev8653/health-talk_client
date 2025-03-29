import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getLikesByPostId,
  createLike,
  getLikeBySlugArticle,
} from "@/apis/likeArticle";

export const getLikesByPostIdThunk = createAsyncThunk(
  "like/getByPostId",
  async (id: string, thunkAPI) => {
    try {
      const response = await getLikesByPostId(id);
      return response;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createLikeThunk = createAsyncThunk(
  "like/create",
  async (postId: string, thunkAPI) => {
    try {
      const response = await createLike(postId);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getLikeBySlugArticleThunk = createAsyncThunk(
  "like/getBySlug",
  async (slug: string, thunkAPI) => {
    try {
      const response = await getLikeBySlugArticle(slug);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
