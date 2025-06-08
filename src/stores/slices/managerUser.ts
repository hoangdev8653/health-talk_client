import {
  blockUserThunk,
  getAllUserBlockedThunk,
  unblockUserThunk,
  deleteUserBlockThunk,
} from "@/stores/thunks/managerUser";
import { createSlice } from "@reduxjs/toolkit";

interface UserBlockedState {
  userBlocked: any[];
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UserBlockedState = {
  userBlocked: [],
  data: [],
  loading: false,
  error: null,
};

const managerUserSlice = createSlice({
  name: "managerUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserBlockedThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUserBlockedThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data.content;
      })
      .addCase(getAllUserBlockedThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(blockUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(blockUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data];
      })
      .addCase(blockUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(unblockUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(unblockUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data];
      })
      .addCase(unblockUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteUserBlockThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUserBlockThunk.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteUserBlockThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = managerUserSlice.actions;
export default managerUserSlice.reducer;
