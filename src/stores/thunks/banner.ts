import { getAllBanner } from "@/apis/banner";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllBannerThunk = createAsyncThunk(
  "banner/",
  async (_, thunkAPI) => {
    try {
      const response = await getAllBanner();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
