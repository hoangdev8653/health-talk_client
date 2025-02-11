import { getAllCategoryApi } from "@/apis/category";
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
