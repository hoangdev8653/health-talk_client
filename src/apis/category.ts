import axiosInstance from "@/lib/axiosInstance";
// import {} from "@/types/"

export const getAllCategoryApi = async () => {
  return await axiosInstance({
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
