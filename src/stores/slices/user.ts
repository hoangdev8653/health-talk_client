import {
  getAllUserThunk,
  loginThunk,
  registerThunk,
  updateUsernameThunk,
  updateAvatarThunk,
  updatePasswordThunk,
  updateRoleThunk,
  deleteUserThunk,
} from "@/stores/thunks/user";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  data: any;
  user: any;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: [],
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        const { password, ...userContent } = action.payload.data.content;

        localStorage.setItem("user", JSON.stringify(userContent));
        localStorage.setItem(
          "accessToken",
          JSON.stringify(action.payload.data.accessToken)
        );
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(action.payload.data.refreshToken)
        );
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateUsernameThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUsernameThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateUsernameThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateAvatarThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateAvatarThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateRoleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRoleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateRoleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updatePasswordThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePasswordThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updatePasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        // state.data = state.data.filter((user: any) => user.id !== action.payload.id);
      })
      .addCase(deleteUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
