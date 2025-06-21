import {
  getAllCategoryApi,
  createCategory,
  deleteCategory,
} from "@/apis/category";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCategoryThunk = createAsyncThunk(
  "categories/",
  async (_, thunkAPI) => {
    try {
      const response = await getAllCategoryApi();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createCategoryThunk = createAsyncThunk(
  "categories/create",
  async (data: any, thunkAPI) => {
    try {
      // console.log("Creating category with data:", data);

      const response = await createCategory(data);
      console.log("Category created successfully:", response);

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteCategoryThunk = createAsyncThunk(
  "categories/delete",
  async (id: string, thunkAPI) => {
    try {
      const response = await deleteCategory(id);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
