import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/stores/slices/counterSlice";
import UserReducer from "@/stores/slices/user";
import CategoryReducer from "@/stores/slices/category";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: UserReducer,
    category: CategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
