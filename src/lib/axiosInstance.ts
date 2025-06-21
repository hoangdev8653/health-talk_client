import axios from "axios";
import { BASE_URL_LOCAL, BASE_URL_PRODUCTION } from "@/utils/constant";
import {
  getLocalStorage,
  setLocalStorage,
  clearLocalStorage,
} from "@/lib/localStorage";

export const axiosConfig = axios.create({
  baseURL: BASE_URL_PRODUCTION,
  withCredentials: true,
});

axiosConfig.interceptors.request.use(
  function (config) {
    const accessToken = getLocalStorage("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    console.log(error.message);
    return Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = getLocalStorage("refreshToken");
        if (!refreshToken) {
          // console.error("Refresh token is missing");
          // window.location.href = "/login";
          return Promise.reject(error);
        }
        const response = await axios.post(
          "http://localhost:3007/user/refreshToken",
          {
            refreshToken,
          }
        );
        if (response.status !== 200) {
          console.error("Refresh token expired or invalid");
          clearLocalStorage();
          return Promise.reject(error);
        }
        console.log("refreshToken: ", response);

        const accessToken = response.data?.newToken?.accessToken;
        if (!accessToken) {
          clearLocalStorage();
          console.error("accessToken token is missing");
          return Promise.reject(error);
        }
        setLocalStorage("accessToken", accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (error: any) {
        console.log(error.message);
        console.log("Không thể đọc accessToken");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
