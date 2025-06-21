import { axiosConfig } from "@/lib/axiosInstance";

export const getAllQuestion = async () => {
  return await axiosConfig({
    method: "get",
    url: "/question",
  });
};

export const getQuestionById = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `/question/${id}`,
  });
};

export const getQuestionByTagId = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `/question/tag/${id}`,
  });
};

export const getQuestionBySlug = async (slug: string) => {
  return await axiosConfig({
    method: "get",
    url: `/question/${slug}`,
  });
};

export const createQuestion = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/question/createQuestionTag",
    data: data,
  });
};

export const deleteQuestion = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/question/${id}`,
  });
};
