import {
  getNotificationByUser,
  updateStatusNotification,
  deleteNotification,
} from "@/apis/notification";
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

export const updateStatusNotificationThunk = createAsyncThunk(
  "notification/updateStatus",
  async (id: string, thunkAPI) => {
    try {
      const response = await updateStatusNotification(id);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteNotificationThunk = createAsyncThunk(
  "notification/delete",
  async (id: string, thunkAPI) => {
    try {
      const response = await deleteNotification(id);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
