import {
  loginApi,
  registerApi,
  updateAvarta,
  getAllUser,
  updateUsername,
  updatePassword,
  updateRole,
  deleteUser,
} from "@/apis/user";
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

export const updateUsernameThunk = createAsyncThunk(
  "user/updateUsername",
  async (data: any, thunkAPI) => {
    try {
      const response = await updateUsername(data);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  "user/updateAvatar",
  async (data: File, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("image", data);

      const response = await updateAvarta(formData);

      console.log("Response from server:", response);
      return response;
    } catch (error: any) {
      console.error("Error updating avatar:", error);
      return thunkAPI.rejectWithValue(
        error.response?.data || "Something went wrong"
      );
    }
  }
);

export const updatePasswordThunk = createAsyncThunk(
  "user/updatePassword",
  async (data: any, thunkAPI) => {
    try {
      const response = await updatePassword(data);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const updateRoleThunk = createAsyncThunk(
  "user/updateRole",
  async (data: any, thunkAPI) => {
    try {
      const response = await updateRole(data);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const deleteUserThunk = createAsyncThunk(
  "user/delete",
  async (id: string, thunkAPI) => {
    try {
      const response = await deleteUser(id);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
