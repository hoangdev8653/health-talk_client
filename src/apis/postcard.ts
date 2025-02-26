import { axiosConfig } from "@/lib/axiosInstance";

export const getAllPostcard = async () => {
  return await axiosConfig({
    method: "get",
    url: "/postcard",
  });
};
