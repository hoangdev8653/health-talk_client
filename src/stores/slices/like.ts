import { createLikeThunk } from "@/stores/thunks/like";
import { createSlice } from "@reduxjs/toolkit";

interface LikeState {
  likes: number;
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: LikeState = {
  likes: 0,
  data: [],
  loading: false,
  error: null,
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createLikeThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createLikeThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createLikeThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = likeSlice.actions;
export default likeSlice.reducer;
