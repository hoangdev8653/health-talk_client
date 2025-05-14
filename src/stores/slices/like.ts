import {
  createLikeThunk,
  getLikeBySlugArticleThunk,
} from "@/stores/thunks/like";
import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "@/lib/localStorage";

interface LikeState {
  totalLikes: number;
  isLike: boolean;
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: LikeState = {
  totalLikes: 0,
  isLike: true,
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
        const user = getLocalStorage("user");
        state.totalLikes = action.payload.data.content.length;
        const hasLike = action.payload.data.content.some(
          (item: any) => item.userId === user.id
        );
        if (hasLike) {
          state.isLike = true;
        }
      })
      .addCase(createLikeThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getLikeBySlugArticleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLikeBySlugArticleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        const user = getLocalStorage("user");
        state.totalLikes = action.payload.data.content.length;
        state.isLike = action.payload.data.content.some(
          (item: any) => item?.User?.id === user?.id
        );
      })
      .addCase(getLikeBySlugArticleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = likeSlice.actions;
export default likeSlice.reducer;
