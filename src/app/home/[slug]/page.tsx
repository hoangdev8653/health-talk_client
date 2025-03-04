"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import CommentArticles from "@/components/CommentArticles";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getArticleBySlugThunk } from "@/stores/thunks/article";
import Loading from "@/components/Loading";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ArticleDetail: React.FC = () => {
  const dispatch = useAppDispatch();
  const article = useAppSelector((state) => state.article);

  const [sort, setSort] = useState<string>("newest");
  const pathname = usePathname();
  const slug = pathname ? pathname.split("/").pop() : "";

  useEffect(() => {
    if (slug) {
      dispatch(getArticleBySlugThunk(slug));
    }
  }, [slug]);

  return (
    <div className="w-full">
      {article.loading ? (
        <Loading />
      ) : (
        <>
          <div className="w-4/5 mx-auto my-10">
            <p
              style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
              className=" font-medium text-3xl my-4 "
            >
              {article?.data?.data?.content?.title}
            </p>
            <div className="my-8 w-full">
              <Image
                className="w-full object-cover h-[700px]"
                width={200}
                height={550}
                src={
                  article?.data?.data?.content?.image || "/default-image.jpg"
                }
                alt={article?.data?.data?.content?.slug || "Default alt text"}
              />
            </div>
            <div className="flex gap-4 tablet:block">
              <div className="w-[65%] tablet:w-full">
                <div className="my-4 leading-relaxed md:text-xl text-sm pb-4">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {article?.data?.data?.content?.content}
                  </ReactMarkdown>
                </div>
                <p
                  style={{ textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)" }}
                  className=" font-medium text-2xl my-2 "
                >
                  {article?.data?.data?.content?.User?.username}
                </p>
                <div className=" my-8">
                  <div className="flex justify-between">
                    <div className="font-bold text-base">0 comments</div>
                    <div className="flex items-center">
                      <span>Sort by</span>
                      <select
                        title="sort by"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="border p-1 w-full mb-4 bg-white text-black"
                      >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-solid border-gray-300 opacity-70"></div>
                <div className="w-full flex gap-2 my-6">
                  <div>
                    <Image
                      width={48}
                      height={48}
                      src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s48x48&_nc_cat=1&ccb=1-7&_nc_sid=22ec41&_nc_ohc=zZKR384LhekQ7kNvgFEZ1HE&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&edm=AJqh0Q8EAAAA&_nc_gid=A5RU23Zff_zA6eAYjgFGt3M&oh=00_AYCf1KUwEx-mG0ahUNMriw4SEW_AwzarvJEYWAjjLS3M-Q&oe=67C7D8FA"
                      alt="avatar_defaut"
                    />
                  </div>
                  <div
                    style={{ background: "#f5f6f7" }}
                    className="flex-1 relative h-24 border-[1px]"
                  >
                    <input
                      className="w-full border-[1px] border-gray-300 min-h-10 text-base px-2 py-3 focus:outline-none "
                      type="text"
                      placeholder="Add a comment..."
                    />
                    <button
                      style={{ backgroundColor: "#9cb4d8" }}
                      className="cursor-default float-right px-2 py-1 text-white bg-blue-300  font-semibold m-2 rounded"
                    >
                      Post
                    </button>
                  </div>
                </div>
                <CommentArticles />
                <CommentArticles />
                <CommentArticles />
                <CommentArticles />
                <CommentArticles />
                <div className="border-b-2 border-solid border-gray-300 opacity-70 my-4"></div>
              </div>
              <div className="flex-1 tablet:w-full">
                <div className=" justify-center items-center">
                  <Image
                    width={360}
                    height={360}
                    className="w-[360px] h-[360px] mx-auto"
                    src="https://www.ladiesofvietnam.net/wp-content/uploads/2018/09/Logo-Final-Round-500-500.jpg"
                    alt="logo"
                  />
                </div>
                <div className="flex my-8 text-center justify-center gap-4">
                  <div className="p-2 bg-blue-700 ">
                    <FaFacebookSquare className="text-4xl text-white bg-transparent  " />
                  </div>
                  <div className="p-2 bg-red-700">
                    <FaYoutube className="text-4xl text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleDetail;
