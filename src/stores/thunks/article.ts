import {
  createArticle,
  getAllArticle,
  getArticleById,
  getArticleBySlug,
  getArticesByCategory,
  getAllArticleBySlugCategory,
  getArticlesByUser,
} from "@/apis/article";
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

export const getArticlesByCategoryThunk = createAsyncThunk(
  "article/category",
  async (categoryId: string, thunkAPI) => {
    try {
      const response = await getArticesByCategory(categoryId);
      return response;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getArticleByIdThunk = createAsyncThunk(
  "article/id",
  async (articleId: string, thunkAPI) => {
    try {
      const response = await getArticleById(articleId);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getArticleBySlugThunk = createAsyncThunk(
  "article/slug",
  async (slug: string, thunkAPI) => {
    try {
      const response = await getArticleBySlug(slug);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllArticleBySlugCategoryThunk = createAsyncThunk(
  "article/slugCategory",
  async (slug: string, thunkAPI) => {
    try {
      const response = await getAllArticleBySlugCategory(slug);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getArticlesByUserThunk = createAsyncThunk(
  "article/byUser",
  async (_, thunkAPI) => {
    try {
      const response = await getArticlesByUser();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
