import {
  getAllPostcard,
  createPostcard,
  deletePostcard,
} from "@/apis/postcard";
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

export const createPostcardThunk = createAsyncThunk(
  "/postcard/create",
  async (data: any, thunkAPI) => {
    try {
      const response = await createPostcard(data);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deletePostcardThunk = createAsyncThunk(
  "/postcard/delete",
  async (id: string, thunkAPI) => {
    try {
      const response = await deletePostcard(id);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
