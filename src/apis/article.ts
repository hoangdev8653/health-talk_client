import { axiosConfig } from "@/lib/axiosInstance";
import { createArticleType } from "@/types/article";

export const getAllArticle = async () => {
  return await axiosConfig({
    method: "get",
    url: "/article",
  });
};

export const getArticesByCategory = async (categoryId: string) => {
  return await axiosConfig({
    method: "get",
    url: `/article/byCategory?id=${categoryId}`,
  });
};

export const getAllArticleBySlugCategory = async (slug: string) => {
  return await axiosConfig({
    method: "get",
    url: `/article/byCategory/${slug}`,
  });
};

export const getArticleById = async (articleId: string) => {
  return await axiosConfig({
    method: "get",
    url: `/article/byId?id=${articleId}`,
  });
};

export const getArticleBySlug = async (slug: string) => {
  return await axiosConfig({
    method: "get",
    url: `/article/${slug}`,
  });
};

export const getArticlesByUser = async () => {
  return await axiosConfig({
    method: "get",
    url: "article/byUser",
  });
};

export const createArticle = async (data: createArticleType) => {
  return await axiosConfig({
    method: "post",
    url: "/article/create",
    data,
  });
};
