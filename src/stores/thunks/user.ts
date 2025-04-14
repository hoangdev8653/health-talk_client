import { loginApi, registerApi, updateAvarta, getAllUser } from "@/apis/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginType, registerType } from "@/types/user";

export const getAllUserThunk = createAsyncThunk(
  "user/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await getAllUser();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const registerThunk = createAsyncThunk(
  "user/dang-ki",
  async (data: registerType, thunkAPI) => {
    try {
      const response = await registerApi(data);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "user/dang-nhap",
  async (data: loginType, thunkAPI) => {
    try {
      const response = await loginApi(data);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  "user/updateAvatar",
  async (data: any, thunkAPI) => {
    try {
      const response = await updateAvarta(data);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
