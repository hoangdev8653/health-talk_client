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

export const createQuestion = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/question/create",
    data: data,
  });
};

export const deleteQuestion = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/question/${id}`,
  });
};
