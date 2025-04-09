import {
  getNotificationByUserThunk,
  updateStatusNotificationThunk,
  deleteNotificationThunk,
} from "@/stores/thunks/notification";
import { createSlice } from "@reduxjs/toolkit";

interface NotificationState {
  loading: boolean;
  NotificationByUser: any;
  NotificationIsReaded: any;
  NotificationIsUnRead: any;
  NotificationFavorite: any;
  totalNotification: number;
  totalNotificationUnRead: number;
  error: string | null;
}

const initialState: NotificationState = {
  loading: false,
  NotificationByUser: null,
  NotificationIsReaded: null,
  NotificationIsUnRead: null,
  NotificationFavorite: null,
  totalNotification: 0,
  totalNotificationUnRead: 0,
  error: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNotificationByUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNotificationByUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.NotificationByUser = action.payload.data.content;
        if (action.payload.data.content.length === 0) {
          state.totalNotification = 0;
          state.totalNotificationUnRead = 0;
        } else {
          state.totalNotification = action.payload.data.content.length;

          state.NotificationIsUnRead = action.payload.data.content.filter(
            (item: any) => item.is_read === false
          );
          state.totalNotificationUnRead = state.NotificationIsUnRead.length;
        }
      })
      .addCase(getNotificationByUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateStatusNotificationThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStatusNotificationThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.NotificationIsReaded = action.payload;
      })
      .addCase(updateStatusNotificationThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteNotificationThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNotificationThunk.fulfilled, (state, action) => {
        const deleteId = action.meta.arg;

        state.loading = false;
        state.NotificationByUser = action.payload.data.content.filter(
          (item: any) => item.id != deleteId
        );

        state.NotificationIsUnRead = action.payload.data.content.filter(
          (item: any) => item.is_read === false
        );
        state.totalNotificationUnRead = state.NotificationIsUnRead.length;
      })
      .addCase(deleteNotificationThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = notificationSlice.actions;
export default notificationSlice.reducer;
