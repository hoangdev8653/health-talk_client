import { getAllPostcard } from "@/apis/postcard";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPostcardThunk = createAsyncThunk(
  "/postcard",
  async (_, thunkAPI) => {
    try {
      const response = await getAllPostcard();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
