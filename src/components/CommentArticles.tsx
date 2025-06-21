"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { articleValidate } from "@/validations/article";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import formatDate from "@/utils/formatDate";
import {
  createReviewArticleThunk,
  getReviewBySlugArticleThunk,
} from "@/stores/thunks/reviewArticle";
import {
  getLikeBySlugArticleThunk,
  createLikeThunk,
} from "@/stores/thunks/like";
import { useRouter } from "next/navigation";
import { AiOutlineLike } from "react-icons/ai";
import { getLocalStorage } from "@/lib/localStorage";

interface propsComment {
  slug?: string | null | undefined;
  articleId?: string | null | undefined;
}

type valueComment = {
  content: string;
  likes: number;
  userId: string;
  createdAt: string;
  User: {
    id: string;
    username: string;
    image: string;
  };
};

function CommentArticles({ slug, articleId }: propsComment) {
  const router = useRouter();
  const dispacth = useAppDispatch();
  const [sortOrder, setSortOrder] = useState<string>("newest");
  const { data } = useAppSelector((state) => state.reviewArticle);
  const like = useAppSelector((state) => state.like);
  const [isLike, setIsLike] = useState<boolean>(like.isLike);
  const user = getLocalStorage("user");

  useEffect(() => {
    if (slug) {
      dispacth(getReviewBySlugArticleThunk(slug));
      dispacth(getLikeBySlugArticleThunk(slug));
    }
  }, [slug, dispacth]);

  const sortReviews = [...data].sort((a: any, b: any) => {
    return sortOrder === "newest"
      ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(articleValidate.reviewArticle),
  });

  const handleLike = (articleId: string) => {
    if (!user) {
      router.push("/login");
      return;
    }
    setIsLike(!isLike);
    dispacth(createLikeThunk(articleId));
  };

  const content = watch("content");

  const onSubmit = async (value: any) => {
    if (!user) {
      router.push("/login");
      return;
    }

    const result = await dispacth(
      createReviewArticleThunk({
        ...value,
        articleId: articleId,
      })
    );

    reset();
  };

  return (
    <div className="w-full ">
      <div className="my-8">
        <div className="flex justify-between">
          <div className="font-bold text-base flex gap-3">
            <button
              className="flex gap-1 items-center"
              onClick={() => handleLike(sortReviews[0]?.Article?.id)}
            >
              <AiOutlineLike
                className={`size-5 cursor-pointer hover:opacity-50 ${
                  isLike ? "text-blue-500" : ""
                }`}
              />
              <span>{like?.totalLikes || 0} Likes</span>
            </button>
            <p className="mt-[2px]">{data?.length} comments</p>
          </div>
          <div className="flex items-center">
            <span>Sort by</span>
            <select
              title="sort by"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border p-1 bg-white text-black"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-2 my-6">
        <div>
          <Image
            width={48}
            height={48}
            src={user ? user?.image : "/images/avatar_default.jpg"}
            alt="avatar"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 relative h-24 border-[1px] comment-form-bg"
        >
          <input
            {...register("content")}
            className="w-full border-[1px] border-gray-300 min-h-10 text-base px-2 py-3 focus:outline-none "
            type="text"
            placeholder="Add a comment..."
          />

          <button
            disabled={!content?.trim() && content?.length < 3 ? true : false}
            style={
              !content || content.trim().length < 3
                ? { backgroundColor: "#9cb4d8" }
                : { backgroundColor: "blue" }
            }
            className="cursor-default float-right px-2 py-1 text-white font-semibold m-2 rounded"
          >
            Post
          </button>
        </form>
      </div>
      {sortReviews.length > 0 ? (
        <div className="overflow-y-auto h-[200px]">
          {sortReviews &&
            sortReviews.map((item: valueComment, index: number) => (
              <div key={index}>
                <div className="border-b-2 border-gray-300 opacity-70"></div>
                <div className="flex gap-2 my-4">
                  <div className="avatar cursor-pointer">
                    <Image
                      className="w-12 h-12 object-cover"
                      width={48}
                      height={48}
                      src={user ? user?.image : "/images/avatar_default.jpg"}
                      alt="avatar"
                    />
                  </div>
                  <div className="flex-1 block relative ">
                    <p className="font-semibold text-blue-800 ">
                      {item?.User?.username || user?.username}
                    </p>
                    <p className="text-sm my-1 text-gray-500">
                      {item?.content}
                    </p>
                    <div className="flex gap-2 text-xs ">
                      <span className="text-blue-500 cursor-pointer hover:underline">
                        Like
                      </span>
                      <span className="text-blue-500 cursor-pointer hover:underline">
                        Reply
                      </span>
                      <span className="text-gray-400 ">
                        {formatDate(item?.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <>
          <div>
            <p>Bạn hãy là người đầu tiên bình luận về bài viết</p>
          </div>
        </>
      )}
    </div>
  );
}

export default CommentArticles;
