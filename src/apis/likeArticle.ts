import { axiosConfig } from "@/lib/axiosInstance";

export const getLikesByPostId = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `like/byPost?id=${id}`,
  });
};

export const createLike = async (postId: string) => {
  return await axiosConfig({
    method: "post",
    url: "like/create",
    data: {
      postId,
    },
  });
};

export const getLikeBySlugArticle = async (slug: string) => {
  return await axiosConfig({
    method: "get",
    url: `like/${slug}`,
  });
};
