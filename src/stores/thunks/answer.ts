import { getAnswerBySlug, createAnswer, deleteAnswer } from "@/apis/answer";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAnswerBySlugThunk = createAsyncThunk(
  "answer/bySlug",
  async (slug: string, thunkAPI) => {
    try {
      const response = await getAnswerBySlug(slug);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createAnswerThunk = createAsyncThunk(
  "answer/create",
  async (data: any, thunkAPI) => {
    try {
      const response = await createAnswer(data);
      // console.log(response);

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteAnswerThunk = createAsyncThunk(
  "answer/delete",
  async (id: string, thunkAPI) => {
    try {
      const response = await deleteAnswer(id);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
