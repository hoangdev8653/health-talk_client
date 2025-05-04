import { axiosConfig } from "@/lib/axiosInstance";

export const getAllCategoryApi = async () => {
  return await axiosConfig({
    method: "get",
    url: "/categories",
  });
};

export const createCategory = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/categories/create",
    data,
  });
};
