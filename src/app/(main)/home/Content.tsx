"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Article from "@/components/Article";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllPostcardThunk } from "@/stores/thunks/postcard";
import { getAllArticleThunk } from "@/stores/thunks/article";
import RevealOnScroll from "@/components/RevealOnScroll";
interface postcardData {
  title: string;
  id: string;
  video_url: string;
  image: string;
  decription: string;
}

function Content() {
  const dispatch = useAppDispatch();
  const postcard = useAppSelector((state) => state.postcard);
  const article = useAppSelector((state) => state.article);

  useEffect(() => {
    dispatch(getAllPostcardThunk());
    dispatch(getAllArticleThunk());
  }, [dispatch]);

  return (
    <div className="w-4/5 mx-auto ">
      <Article data={article?.allArticles} itemToShow={4} />
      <div>
        {postcard?.data?.data?.content?.map(
          (item: postcardData, index: number) => (
            <RevealOnScroll key={item?.id}>
              <div
                className={`flex items-center gap-4 tablet:block my-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 relative group tablet:w-full ${
                    index % 2 !== 0 ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <Image
                    width={360}
                    height={225}
                    src={item?.image}
                    alt={item?.title}
                    className="my-4 w-full h-[350px] object-cover "
                  />
                </div>
                <div className="w-1/2 text-center tablet:w-full ">
                  <h2 className="text-xl font-semibold mb-2 tablet:text-2xl ">
                    {item?.title}
                  </h2>
                  <p style={{ color: "#666" }} className=" tablet:text-xl">
                    {item?.decription}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          )
        )}
      </div>
    </div>
  );
}

export default Content;
