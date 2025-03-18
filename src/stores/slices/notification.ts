import { getNotificationByUserThunk } from "@/stores/thunks/notification";
import { createSlice } from "@reduxjs/toolkit";

interface NotificationState {
  loading: boolean;
  NotificationByUser: any;
  NotificationIsReaded: any;
  NotificationIsUnRead: any;
  totalNotification: number;
  totalNotificationUnRead: number;
  error: string | null;
}

const initialState: NotificationState = {
  loading: false,
  NotificationByUser: null,
  NotificationIsReaded: null,
  NotificationIsUnRead: null,
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
        state.NotificationByUser = action.payload;
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
      });
  },
});

export const {} = notificationSlice.actions;
export default notificationSlice.reducer;
