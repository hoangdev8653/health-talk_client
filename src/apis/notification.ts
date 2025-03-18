import { axiosConfig } from "@/lib/axiosInstance";

export const getNotificationByUser = async () => {
  return await axiosConfig({
    method: "get",
    url: "notification/getByUser",
  });
};
