"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import CommentArticles from "@/components/CommentArticles";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  getArticleBySlugThunk,
  getAllArticleThunk,
} from "@/stores/thunks/article";
import Loading from "@/components/Loading";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import ArticlePreviewBanner from "@/components/ArticlePreviewBanner";

const ArticleDetail: React.FC = () => {
  const dispatch = useAppDispatch();
  const { articleDetail, loading } = useAppSelector((state) => state.article);
  const { allArticles } = useAppSelector((state) => state.article);
  const pathname = usePathname();
  const slug = pathname?.split("/").pop() || "";

  useEffect(() => {
    if (slug) dispatch(getArticleBySlugThunk(slug));
    dispatch(getAllArticleThunk());
  }, [slug]);

  return (
    <div className="w-full">
      {loading ? (
        <Loading />
      ) : (
        <div className="w-4/5 mx-auto my-10">
          <p className="font-medium text-3xl my-4 text-shadow-md">
            {articleDetail?.title}
          </p>
          <div className="my-8 w-full">
            {articleDetail?.image && (
              <Image
                className="w-full object-cover h-[700px]"
                width={800}
                height={700}
                src={articleDetail.image}
                alt={articleDetail.slug || "default image"}
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
          <div className="flex gap-4 flex-wrap tablet:block">
            <div className="tablet:w-full w-[65%] ">
              <div className="my-4 leading-relaxed md:text-xl text-sm pb-4">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {articleDetail?.content}
                </ReactMarkdown>
              </div>
              <p className="font-medium text-2xl my-2 text-shadow-md">
                {articleDetail?.User?.username}
              </p>
              <CommentArticles articleId={articleDetail?.id} slug={slug} />
            </div>
            <div className="tablet:w-full w-[30%]">
              <Image
                width={360}
                height={360}
                className="w-[360px] h-[360px] mx-auto"
                src="https://www.ladiesofvietnam.net/wp-content/uploads/2018/09/Logo-Final-Round-500-500.jpg"
                alt="logo"
              />
              <div className="flex my-8 justify-center gap-4">
                <FaFacebookSquare className="text-4xl text-blue-700 cursor-pointer" />
                <FaYoutube className="text-4xl text-red-700 cursor-pointer" />
              </div>
              <div className="mx-auto">
                <ArticlePreviewBanner data={allArticles} itemToShow={1} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
