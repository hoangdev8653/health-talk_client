import { getAllBannerThunk } from "@/stores/thunks/banner";
import { createSlice } from "@reduxjs/toolkit";

interface BannerState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: BannerState = {
  data: null,
  loading: false,
  error: null,
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBannerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBannerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllBannerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = bannerSlice.actions;
export default bannerSlice.reducer;
