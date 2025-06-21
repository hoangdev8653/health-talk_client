import { axiosConfig } from "@/lib/axiosInstance";

export const getNotificationByUser = async () => {
  return await axiosConfig({
    method: "get",
    url: "notification/getByUser",
  });
};

export const updateStatusNotification = async (id: string) => {
  return await axiosConfig({
    method: "put",
    url: `notification/updateStatus?id=${id}`,
  });
};

export const deleteNotification = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `notification/delete?id=${id}`,
  });
};
