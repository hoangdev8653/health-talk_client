import { createArticle, getAllArticle } from "@/apis/article";
import { createArticleType } from "@/types/article";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllArticleThunk = createAsyncThunk(
  "article",
  async (_, thunkAPI) => {
    try {
      const response = await getAllArticle();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createArticleThunk = createAsyncThunk(
  "article/create",
  async (data: createArticleType, thunkAPI) => {
    try {
      const response = await createArticle(data);
      console.log(response);

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
