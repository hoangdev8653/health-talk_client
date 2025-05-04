import { getAllTagsThunk, getTagByIdThunk } from "@/stores/thunks/tag";
import { createSlice } from "@reduxjs/toolkit";

interface TagState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: TagState = {
  data: null,
  loading: false,
  error: null,
};

const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTagsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTagsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllTagsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = tagSlice.actions;
export default tagSlice.reducer;
