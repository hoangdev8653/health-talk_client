import { getAllTags, getTagById } from "@/apis/tag";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTagsThunk = createAsyncThunk("/tag", async (_, thunkApi) => {
  try {
    const response = await getAllTags();
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

export const getTagByIdThunk = createAsyncThunk(
  "/tag/:id",
  async (id: string, thunkApi) => {
    try {
      const response = await getTagById(id);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
