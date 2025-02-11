import axiosInstance from "@/lib/axiosInstance";
import { loginType, registerType } from "@/types/user";

export const registerApi = async (data: registerType): Promise<any> => {
  return await axiosInstance({
    method: "post",
    url: "/user/dang-ki",
    data,
  });
};

export const loginApi = async (data: loginType): Promise<any> => {
  return await axiosInstance({
    method: "post",
    url: "/user/dang-nhap",
    data,
  });
};
