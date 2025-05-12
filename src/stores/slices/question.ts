import {
  getQuestionByTagIdThunk,
  getQuestionByIdThunk,
  getAllQuestionThunk,
  getQuestionBySlugThunk,
  createQuestionThunk,
  deleteQuestionThunk,
} from "@/stores/thunks/question";
import { createSlice } from "@reduxjs/toolkit";

interface QuestionState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: QuestionState = {
  data: [],
  loading: false,
  error: null,
};

const quesionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllQuestionThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllQuestionThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllQuestionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getQuestionBySlugThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getQuestionBySlugThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getQuestionBySlugThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    // .addCase(getQuestionByIdThunk.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(getQuestionByIdThunk.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.data = action.payload;
    // })
    // .addCase(getQuestionByIdThunk.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload as string;
    // })
    // .addCase(getQuestionByTagIdThunk.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(getQuestionByTagIdThunk.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.data = action.payload;
    // })
    // .addCase(getQuestionByTagIdThunk.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload as string;
    // })
    // .addCase(createQuestionThunk.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(createQuestionThunk.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.data = action.payload;
    // })
    // .addCase(createQuestionThunk.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload as string;
    // })
    // .addCase(deleteQuestionThunk.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(deleteQuestionThunk.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.data = action.payload;
    // })
    // .addCase(deleteQuestionThunk.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload as string;
    // });
  },
});

export const {} = quesionSlice.actions;
export default quesionSlice.reducer;
