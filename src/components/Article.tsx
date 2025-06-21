"use client";

import Image from "next/image";
import React from "react";
import SimpleSlider from "@/components/Slick";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
interface Props {
  data?: any;
  itemToShow?: number;
}

interface ArticleData {
  content: string;
  id: string;
  title: string;
  image: string;
  slug: string;
  Category: {
    id: string;
    name: string;
  };
  User: {
    id: string;
    username: string;
  };
}

function Article({ data, itemToShow = 3 }: Props) {
  return (
    <div className="overflow-hidden ">
      <SimpleSlider
        slidesToScroll={2}
        slidesToShow={itemToShow}
        beakpointTablet={980}
        beakpointMobile={600}
      >
        {data?.data?.content?.map((item: ArticleData, index: number) => (
          <div key={item.id} className=" w-full p-2 justify-center text-center">
            <Image
              width={315}
              height={550}
              className="object-cover w-[315px] h-[200px] mx-auto mobile:w-full"
              src={item.image}
              alt="logo"
            />
            <div className=" my-0.5">
              <h2 className="my-0.5 text-lg mobile:text-xl">{item.title}</h2>
              <div
                className="text-base mobile:text-lg"
                style={{ color: "#666" }}
              >
                <p className="my-0.5">
                  by {item.User.username} | <span>{item.Category.name}</span>
                </p>
                <div className="text-sm font-medium mobile:text-base">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {item.content.length > 100
                      ? item.content.slice(0, 200) + "..."
                      : item.content}
                  </ReactMarkdown>
                </div>
                <a href={`http://localhost:3000/home/${item.slug}`}>
                  <span className="text-rose-400 hover:underline cursor-pointer mobile:text-lg">
                    read more
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </SimpleSlider>
    </div>
  );
}

export default Article;
