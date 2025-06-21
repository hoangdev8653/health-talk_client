import { axiosConfig } from "@/lib/axiosInstance";

export const getAnswerBySlug = async (slug: string) => {
  return await axiosConfig({
    method: "get",
    url: `answer/${slug}`,
  });
};

export const createAnswer = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/answer/create",
    data,
  });
};

export const deleteAnswer = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/answer/delete?id=${id}`,
  });
};
