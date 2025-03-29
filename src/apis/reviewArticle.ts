import { axiosConfig } from "@/lib/axiosInstance";

export const createReviewArticle = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "reviewArticle/create",
    data,
  });
};

export const getReviewBySlugArticle = async (slug: string) => {
  return await axiosConfig({
    method: "get",
    url: `reviewArticle/${slug}`,
  });
};
