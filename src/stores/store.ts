import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "@/stores/slices/user";
import CategoryReducer from "@/stores/slices/category";
import PostcardReducer from "@/stores/slices/postcard";
import BannerReducer from "@/stores/slices/banner";
import ArticleReducer from "@/stores/slices/article";
import LikeReducer from "@/stores/slices/like";
import NotificationReducer from "@/stores/slices/notification";
import ReviewArticleReducer from "@/stores/slices/reviewArticle";
import ManagerUserReducer from "@/stores/slices/managerUser";
import QuestionReducer from "@/stores/slices/question";
import TagReducer from "@/stores/slices/tag";
import AnswerReducer from "@/stores/slices/answer";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    category: CategoryReducer,
    postcard: PostcardReducer,
    banner: BannerReducer,
    article: ArticleReducer,
    like: LikeReducer,
    notification: NotificationReducer,
    reviewArticle: ReviewArticleReducer,
    managerUser: ManagerUserReducer,
    question: QuestionReducer,
    tag: TagReducer,
    answer: AnswerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
