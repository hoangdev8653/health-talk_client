import {
  getAllUserblocked,
  blockUser,
  unblockUser,
  deleteUserBlock,
} from "@/apis/managerUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUserBlockedThunk = createAsyncThunk(
  "managerUser/getAllUserBlockedThunk",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUserblocked();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const blockUserThunk = createAsyncThunk(
  "managerUser/blockUserThunk",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await blockUser(data);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const unblockUserThunk = createAsyncThunk(
  "managerUser/unblockUserThunk",
  async (id: string, { rejectWithValue }) => {
    try {
      console.log("Unblocking user with ID:", id);

      const response = await unblockUser(id);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteUserBlockThunk = createAsyncThunk(
  "managerUser/deleteUserBlockThunk",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await deleteUserBlock(id);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
