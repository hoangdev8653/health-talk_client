import { axiosConfig } from "@/lib/axiosInstance";

export const getAllTags = async () => {
  return await axiosConfig({
    method: "get",
    url: "/tag",
  });
};

export const getTagById = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `/tag/${id}`,
  });
};
