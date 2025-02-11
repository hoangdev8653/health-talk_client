import { loginApi, registerApi } from "@/apis/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginType, registerType } from "@/types/user";

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
      console.log(response);

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
