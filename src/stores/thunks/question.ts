import {
  getAllQuestion,
  getQuestionByTagId,
  getQuestionById,
  getQuestionBySlug,
  createQuestion,
  deleteQuestion,
} from "@/apis/question";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllQuestionThunk = createAsyncThunk(
  "/question",
  async (_, thunkAPI) => {
    try {
      const response = await getAllQuestion();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getQuestionByIdThunk = createAsyncThunk(
  "/question/:id",
  async (id: string, thunkAPI) => {
    try {
      const response = await getQuestionById(id);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getQuestionByTagIdThunk = createAsyncThunk(
  "/question/tag/:id",
  async (id: string, thunkAPI) => {
    try {
      const response = await getQuestionByTagId(id);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getQuestionBySlugThunk = createAsyncThunk(
  "/question/slug",
  async (slug: string, thunkAPI) => {
    try {
      const response = await getQuestionBySlug(slug);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createQuestionThunk = createAsyncThunk(
  "/question/createQuestionTag",
  async (data: any, thunkAPI) => {
    try {
      const response = await createQuestion(data);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteQuestionThunk = createAsyncThunk(
  "/question/:id",
  async (id: string, thunkAPI) => {
    try {
      const response = await deleteQuestion(id);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
