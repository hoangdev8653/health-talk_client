import { axiosConfig } from "@/lib/axiosInstance";

export const getAllBanner = async () => {
  return await axiosConfig({
    method: "get",
    url: "/banner",
  });
};
