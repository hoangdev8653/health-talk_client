import { getNotificationByUser } from "@/apis/notification";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNotificationByUserThunk = createAsyncThunk(
  "notification/getByUser",
  async (_, thunkAPI) => {
    try {
      const response = await getNotificationByUser();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
