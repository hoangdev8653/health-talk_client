import { axiosConfig } from "@/lib/axiosInstance";

export const getAllPostcard = async () => {
  return await axiosConfig({
    method: "get",
    url: "/postcard",
  });
};

export const createPostcard = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/postcard/create",
  });
};

export const deletePostcard = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `postcard/delete/?id=${id}`,
  });
};
