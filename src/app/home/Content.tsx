"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Article from "@/components/Article";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getAllPostcardThunk } from "@/stores/thunks/postcard";
import { getAllArticleThunk } from "@/stores/thunks/article";
import SimpleSlider from "@/components/Slick";

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
    <div className="w-4/5 mx-auto">
      {/* <SimpleSlider slidesToScroll={1} slidesToShow={1}> */}
      <Article data={article.data} itemToShow={4} />
      {/* </SimpleSlider> */}
      <div>
        {postcard.data.data?.content?.map(
          (item: postcardData, index: number) => (
            <div
              key={item.id}
              className={`flex items-center gap-4 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`w-1/2 relative group ${
                  index % 2 !== 0 ? "ml-auto" : "mr-auto"
                }`}
              >
                <Image
                  width={360}
                  height={225}
                  src={item.image}
                  alt={item.title}
                  className="my-4 w-full h-full object-cover "
                />
              </div>
              <div className="w-1/2 text-center">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700">{item.decription}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Content;
