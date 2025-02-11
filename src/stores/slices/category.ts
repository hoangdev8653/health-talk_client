import { getAllCategoryThunk } from "@/stores/thunks/category";
import { createSlice } from "@reduxjs/toolkit";

interface CategoryState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  data: null,
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
