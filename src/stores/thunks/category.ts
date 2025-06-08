import { getAllCategoryApi, createCategory } from "@/apis/category";
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
      console.log("Creating category with data:", data);
     

      // const response = await createCategory(data);
      // return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
