import { axiosConfig } from "@/lib/axiosInstance";

export const getAllCategoryApi = async () => {
  return await axiosConfig({
    method: "get",
    url: "/categories",
  });
};

// export const getCategoryById = async (id) => {
//   return await axiosInstance({
//     method: "get",
//     url: "/categoryById/",
//   });
// };
