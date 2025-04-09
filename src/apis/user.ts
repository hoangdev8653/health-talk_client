import { axiosConfig } from "@/lib/axiosInstance";
import { loginType, registerType } from "@/types/user";

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

export const updateAvarta = async (data: any) => {
  return await axiosConfig({
    method: "put",
    url: "/user/updateAvatar",
    data,
  });
};
