import { axiosConfig } from "@/lib/axiosInstance";
import { createArticleType } from "@/types/article";

export const getAllArticle = async () => {
  return await axiosConfig({
    method: "get",
    url: "/article",
  });
};

export const createArticle = async (data: createArticleType) => {
  console.log(data);

  return await axiosConfig({
    method: "post",
    url: "/article/create",
    data,
  });
};
