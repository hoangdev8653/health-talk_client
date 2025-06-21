import { axiosConfig } from "@/lib/axiosInstance";
import { loginType, registerType } from "@/types/user";

export const getAllUser = async () => {
  return axiosConfig({
    method: "get",
    url: "/user",
  });
};

export const registerApi = async (data: registerType) => {
  return await axiosConfig({
    method: "post",
    url: "/user/dang-ki",
    data,
  });
};

export const loginApi = async (data: loginType) => {
  return await axiosConfig({
    method: "post",
    url: "/user/dang-nhap",
    data,
  });
};

export const updateUsername = async (data: string) => {
  return await axiosConfig({
    method: "patch",
    url: "/user/updateUsername",
    data,
  });
};

export const updateAvarta = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/user/updateAvatar",
    data,
  });
};

export const updatePassword = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/user/updatePassword",
    data,
  });
};

export const updateRole = async (data: string) => {
  return await axiosConfig({
    method: "post",
    url: "/user/updateRole",
    data,
  });
};

export const deleteUser = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/user/delete?id=${id}`,
  });
};
