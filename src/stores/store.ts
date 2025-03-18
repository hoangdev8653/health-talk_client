import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "@/stores/slices/user";
import CategoryReducer from "@/stores/slices/category";
import PostcardReducer from "@/stores/slices/postcard";
import BannerReducer from "@/stores/slices/banner";
import ArticleReducer from "@/stores/slices/article";
import LikeReducer from "@/stores/slices/like";
import NotificationReducer from "@/stores/slices/notification";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    category: CategoryReducer,
    postcard: PostcardReducer,
    banner: BannerReducer,
    article: ArticleReducer,
    like: LikeReducer,
    notification: NotificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
