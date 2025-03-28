"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
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

interface propsComment {
  slug: string;
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

function CommentArticles({ slug }: propsComment) {
  const router = useRouter();
  const dispacth = useAppDispatch();
  const [actionComment, setActionComment] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("newest");
  const { data } = useAppSelector((state) => state.reviewArticle);
  const like = useAppSelector((state) => state.like);
  const [isLike, setIsLike] = useState<boolean>(like.isLike);

  useEffect(() => {
    dispacth(getReviewBySlugArticleThunk(slug));
    dispacth(getLikeBySlugArticleThunk(slug));
  }, [slug, dispacth]);
  // console.log(like.data, like.totalLikes, like.isLike);

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
  // console.log(like.data);

  const handleLike = (articleId: string) => {
    setIsLike(!isLike);
    dispacth(createLikeThunk(articleId));
    // console.log(data);
  };

  const content = watch("content");

  const onSubmit = async (value: any) => {
    const result = await dispacth(
      createReviewArticleThunk({
        ...value,
        articleId: data[0]?.Article?.id,
      })
    );
    if (result.payload) {
      reset();
    }
  };

  // console.log(sortReviews[0]?.Article?.id);

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
            src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s48x48&_nc_cat=1&ccb=1-7&_nc_sid=22ec41&_nc_ohc=zZKR384LhekQ7kNvgFEZ1HE&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&edm=AJqh0Q8EAAAA&_nc_gid=A5RU23Zff_zA6eAYjgFGt3M&oh=00_AYCf1KUwEx-mG0ahUNMriw4SEW_AwzarvJEYWAjjLS3M-Q&oe=67C7D8FA"
            alt="avatar_defaut"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ background: "#f5f6f7" }}
          className="flex-1 relative h-24 border-[1px]"
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
        <>
          {sortReviews &&
            sortReviews.map((item: valueComment, index: number) => (
              <div key={index}>
                <div className="border-b-2 border-gray-300 opacity-70"></div>
                <div className="flex gap-2 my-4">
                  <div className="avatar cursor-pointer">
                    <Image
                      width={48}
                      height={48}
                      src={
                        item.User?.image ||
                        "https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s48x48&_nc_cat=1&ccb=1-7&_nc_sid=22ec41&_nc_ohc=zZKR384LhekQ7kNvgFEZ1HE&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&edm=AJqh0Q8EAAAA&_nc_gid=A5RU23Zff_zA6eAYjgFGt3M&oh=00_AYCf1KUwEx-mG0ahUNMriw4SEW_AwzarvJEYWAjjLS3M-Q&oe=67C7D8FA"
                      }
                      alt={item?.User?.id}
                    />
                  </div>
                  <div
                    onMouseEnter={() => setActionComment(true)}
                    onMouseLeave={() => setActionComment(false)}
                    className="flex-1 block relative "
                  >
                    <p className="font-semibold text-blue-800 ">
                      {item?.User?.username}
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
                    {actionComment ? (
                      <>
                        <div className="right-4 top-2 absolute">
                          <FaAngleDown className="text-xl text-gray-500" />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </>
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
