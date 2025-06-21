import { axiosConfig } from "@/lib/axiosInstance";

export const getAllUserblocked = async () => {
  return await axiosConfig({
    method: "get",
    url: "managerUser/",
  });
};

export const blockUser = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "managerUser/block",
    data,
  });
};

export const unblockUser = async (id: string) => {
  return await axiosConfig({
    method: "post",
    url: `managerUser/unblock/?id=${id}`,
  });
};

export const deleteUserBlock = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `managerUser/delete?id=${id}`,
  });
};
