import {
  getAnswerBySlugThunk,
  createAnswerThunk,
  deleteAnswerThunk,
} from "@/stores/thunks/answer";
import { createSlice } from "@reduxjs/toolkit";

interface AnswerState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AnswerState = {
  data: [],
  loading: false,
  error: null,
};

const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnswerBySlugThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAnswerBySlugThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data.content;
      })
      .addCase(getAnswerBySlugThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createAnswerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAnswerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [action.payload.data.content, ...state.data];
        console.log("createAnswerThunk fulfilled", action.payload.data.content);
      })
      .addCase(createAnswerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = answerSlice.actions;
export default answerSlice.reducer;
